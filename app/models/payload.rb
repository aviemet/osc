# == Schema Information
#
# Table name: payloads
#
#  id          :bigint           not null, primary key
#  payload     :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  endpoint_id :bigint           not null
#
# Indexes
#
#  index_payloads_on_endpoint_id  (endpoint_id)
#
# Foreign Keys
#
#  fk_rails_...  (endpoint_id => endpoints.id)
#
class Payload < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title, :endpoint, :payload],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  has_many :protocols_payloads, dependent: :nullify
  has_many :protocols, through: :protocols_payloads

  scope :includes_associated, -> { includes([]) }
end
