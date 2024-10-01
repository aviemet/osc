class RemoteApi < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title, :root_url, :description, :auth_token],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify


  scope :includes_associated, -> { includes([]) }
end
