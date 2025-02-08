# == Schema Information
#
# Table name: commands
#
#  id                 :bigint           not null, primary key
#  address            :string
#  allow_custom_value :boolean          default(FALSE), not null
#  description        :text
#  payload_type       :integer
#  slug               :string           not null
#  title              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  server_id          :bigint           not null
#
# Indexes
#
#  index_commands_on_server_id  (server_id)
#  index_commands_on_slug       (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (server_id => servers.id)
#
class Command < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: [:slugged, :history]

  include PgSearch::Model
  include PublicActivity::Model

  pg_search_scope(
    :search,
    against: [:title, :address, :payload, :description],
    associated_against: {
      protocols: [:title, :description]
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  enum :payload_type, { integer: 0, float: 1, string: 2, blob: 3, time: 4, symbol: 5, character: 6, boolean: 7 }

  attribute :allow_custom_value, :boolean, default: false

  has_many :protocols_commands, dependent: :destroy
  has_many :protocols, through: :protocols_commands
  has_many :command_values, dependent: :destroy

  belongs_to :server

  validates :title, presence: true

  scope :includes_associated, -> { includes([:protocols_commands, :protocols, :command_values]) }

  accepts_nested_attributes_for :command_values, allow_destroy: true
end
