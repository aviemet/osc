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
  include PublicActivity::Model

  pg_search_scope(
    :search,
    against: [:title],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked owner: proc { |controller| controller&.current_user }
  resourcify

  slug :title

  has_many :protocols_commands, -> { order(order: :asc) }, dependent: :destroy, inverse_of: :protocol
  has_many :commands, -> {
    select('commands.*, protocols_commands.*')
      .includes([:server, :command_values])
  }, through: :protocols_commands, dependent: :nullify

  scope :includes_associated, -> { includes([:protocols_commands]) }

  accepts_nested_attributes_for :protocols_commands, allow_destroy: true
end
