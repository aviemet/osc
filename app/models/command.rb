# == Schema Information
#
# Table name: commands
#
#  id                 :bigint           not null, primary key
#  description        :text
#  endpoint           :string
#  payload            :string
#  payload_type       :integer
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
    against: [:title, :endpoint, :payload],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  resourcify

  enum :payload_type, { integer: 0, float: 1, string: 2, blob: 3, time: 4, symbol: 5, character: 6, boolean: 7 }

  has_many :protocols_commands, dependent: :nullify
  has_many :protocols, through: :protocols_commands

  belongs_to :server
  belongs_to :control_payload, class_name: "Control"

  scope :includes_associated, -> { includes([]) }
end
