# == Schema Information
#
# Table name: endpoints
#
#  id          :bigint           not null, primary key
#  description :text
#  title       :string
#  url         :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  server_id   :bigint           not null
#
# Indexes
#
#  index_endpoints_on_server_id  (server_id)
#
# Foreign Keys
#
#  fk_rails_...  (server_id => servers.id)
#
class Endpoint < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title, :url, :description],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  belongs_to :server

  scope :includes_associated, -> { includes([]) }
end
