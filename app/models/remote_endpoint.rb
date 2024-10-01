class RemoteEndpoint < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title, :remote_api, :endpoint],
    associated_against: {
      remote_api: [],,
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  belongs_to :remote_api

  scope :includes_associated, -> { includes([:remote_api]) }
end
