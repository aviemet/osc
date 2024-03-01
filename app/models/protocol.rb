# == Schema Information
#
# Table name: protocols
#
#  id          :bigint           not null, primary key
#  description :text
#  slug        :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_protocols_on_slug  (slug) UNIQUE
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

  slug :title

  has_many :protocols_commands, dependent: :destroy
  has_many :commands, through: :protocols_commands

  scope :includes_associated, -> { includes([]) }
end
