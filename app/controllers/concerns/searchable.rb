# frozen_string_literal: true

module Searchable
  extend ActiveSupport::Concern

  ##
  # Searches and sorts model using search params
  # model: ActiveRecord object
  # sortable_fields: string array of field names which the model can be sorted by.
  #   Sortable fields in nested models use dot-notation: "related_model.field"
  #   To sort by a method on the model class which is not a database field, use `self`: "self.calculated_number"
  ##
  def search(model, sortable_fields = [])
    sort(search_by_params(model), model, sortable_fields)
  end

  protected

  ##
  # Filters ActiveRecord relation by search params
  ##
  def search_by_params(model)
    return model unless params[:search]

    model.where(id: model.search(params[:search]).pluck(:id))
  end

  ##
  # Sorts ActiveRecord relation by sort params
  ##
  def sort(obj, model, sortable_fields)
    # With empty sort params, don't sort
    return obj unless params[:sort]

    # Sort using db query
    obj.order(sort_string(model, sortable_fields))
  end

  ##
  # Returns a string to be used in an `order` statement
  ##
  def sort_string(model, sortable_fields)
    return unless sortable_fields&.include?(params[:sort])

    field_type = get_field_type(model, params[:sort])
    # Don't error if field doesn't exist on model
    return if field_type.nil?

    sort_str = params[:sort].to_s
    "#{sort_str} #{direction}"
  end

  ##
  # Returns the data type of a database field
  ##
  def get_field_type(model, column)
    # if `column` is in the form 'model.field', or further chained such as 'model1.model2.field',
    # ignore the passed `model` param and use the last chained model sent in `column`
    split_fields = column.split(".")
    if split_fields.length > 1
      model = split_fields[-2].titleize.singularize.constantize
      column = split_fields[-1]
    end
    model.column_for_attribute(column).type
  end

  def direction
    %w(asc desc).freeze.include?(params[:direction]) ? params[:direction] : 'asc'
  end
end
