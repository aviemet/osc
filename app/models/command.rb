# == Schema Information
#
# Table name: commands
#
#  id                 :bigint           not null, primary key
#  description        :text
#  message            :string
#  payload            :string
#  payload_type       :integer
#  slug               :string           not null
#  title              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  control_payload_id :bigint
#  server_id          :bigint           not null
#
# Indexes
#
#  index_commands_on_control_payload_id  (control_payload_id)
#  index_commands_on_server_id           (server_id)
#  index_commands_on_slug                (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (control_payload_id => controls.id)
#  fk_rails_...  (server_id => servers.id)
#
class Command < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:title, :message, :payload],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  enum :payload_type, { integer: 0, float: 1, string: 2, blob: 3, time: 4, symbol: 5, character: 6, boolean: 7 }

  slug :title

  has_many :protocols_commands, dependent: :destroy
  has_many :protocols, through: :protocols_commands

  belongs_to :server
  belongs_to :control_payload, class_name: "Control", optional: true

  scope :includes_associated, -> { includes([]) }
end
