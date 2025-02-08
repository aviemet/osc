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
  extend FriendlyId
  friendly_id :title, use: [:slugged, :history]

  include PgSearch::Model
  include PublicActivity::Model

  multisearchable(
    against: [:title, :slug],
  )

  pg_search_scope(
    :search,
    against: [:title],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  has_many :protocols_commands, -> { order(order: :asc) }, dependent: :destroy, inverse_of: :protocol
  has_many :commands, -> {
    select('
      commands.*,
      protocols_commands.*,
      COALESCE(protocols_commands.value, command_values.value) AS value
    ')
      .joins("LEFT JOIN command_values ON command_values.id = protocols_commands.command_value_id")
      .includes([:server, :command_values])
  }, through: :protocols_commands, dependent: :nullify

  validates :title, presence: true

  scope :includes_associated, -> { includes([:protocols_commands]) }

  accepts_nested_attributes_for :protocols_commands, allow_destroy: true
end
