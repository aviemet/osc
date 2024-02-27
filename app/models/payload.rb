# == Schema Information
#
# Table name: payloads
#
#  id         :bigint           not null, primary key
#  endpoint   :string           not null
#  payload    :string
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
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

  has_many :protocols_paylod
  has_many :protocols, through: :protocols_paylod

  scope :includes_associated, -> { includes([]) }
end
