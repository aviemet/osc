# == Schema Information
#
# Table name: remote_endpoints
#
#  id            :bigint           not null, primary key
#  endpoint      :string
#  title         :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  remote_api_id :bigint           not null
#
# Indexes
#
#  index_remote_endpoints_on_remote_api_id  (remote_api_id)
#
# Foreign Keys
#
#  fk_rails_...  (remote_api_id => remote_apis.id)
#
class RemoteEndpoint < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title, :endpoint],
    associated_against: {
      remote_api: [:title, :root_url],
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
