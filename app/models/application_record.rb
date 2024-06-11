class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  # Add .render method to ActiveRecord objects. Located in app/lib/renderable
  include Renderable

  include PublicActivity::Model
  tracked owner: proc { |controller, _model| controller&.current_user || nil }

  include PgSearch::Model
  ##
  # Include a default search scope for overriding
  ##
  pg_search_scope(
    :search,
    against: [],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )
end
