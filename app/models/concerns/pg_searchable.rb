# app/models/concerns/pg_searchable.rb
module PgSearchable
  extend ActiveSupport::Concern

  included do
    include PgSearch::Model
  end

  class_methods do
    def pg_search_config(against: [], associated_against: {}, enable_multisearch: false)
      # Configure regular search
      pg_search_scope(
        :search,
        against: against,
        associated_against: associated_against,
        using: default_search_config,
        ignoring: :accents,
      )

      # Optionally enable multisearch
      if enable_multisearch
        multisearchable(
          against: against,
          additional_attributes: ->(record) {
            associated_against.map do |association, fields|
              associated_record = record.send(association)
              next unless associated_record

              fields.map do |field|
                { "#{association}_#{field}": associated_record.send(field) }
              end
            end.flatten.compact.reduce({}, :merge)
          },
        )
      end
    end

    # Dynamic field-specific searching
    def dynamic_search(query, field)
      search_scope_name = "#{name.underscore}_#{field}_dynamic_search"

      # Define the scope if it doesn't exist
      unless respond_to?(search_scope_name)
        pg_search_scope(
          search_scope_name,
          against: field,
          using: default_search_config,
          ignoring: :accents,
        )
      end

      merge(send(search_scope_name, query))
    end

    # Search across multiple specific fields dynamically
    def multi_field_search(query, fields)
      search_scope_name = "#{name.underscore}_#{fields.join('_')}_search"

      # Define the scope if it doesn't exist
      unless respond_to?(search_scope_name)
        pg_search_scope(
          search_scope_name,
          against: fields,
          using: default_search_config,
          ignoring: :accents,
        )
      end

      merge(send(search_scope_name, query))
    end

    private

    def default_search_config
      {
        tsearch: { prefix: true },
        trigram: {}
      }
    end
  end
end
