# == Schema Information
#
# Table name: protocols
#
#  id          :bigint           not null, primary key
#  description :text
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Protocol < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  has_many :protocols_commands, dependent: :nullify
  has_many :commands, through: :protocols_commands

  scope :includes_associated, -> { includes([]) }
end
