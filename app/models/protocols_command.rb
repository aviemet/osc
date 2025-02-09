# == Schema Information
#
# Table name: protocols_commands
#
#  id               :bigint           not null, primary key
#  delay            :integer
#  order            :integer          not null
#  value            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  command_id       :bigint           not null
#  command_value_id :bigint
#  protocol_id      :bigint           not null
#
# Indexes
#
#  index_protocols_commands_on_command_id        (command_id)
#  index_protocols_commands_on_command_value_id  (command_value_id)
#  index_protocols_commands_on_protocol_id       (protocol_id)
#
# Foreign Keys
#
#  fk_rails_...  (command_id => commands.id)
#  fk_rails_...  (command_value_id => command_values.id)
#  fk_rails_...  (protocol_id => protocols.id)
#
class ProtocolsCommand < ApplicationRecord
  include PgSearchable
  pg_search_config(
    against: [:protocol, :command, :delay],
    associated_against: {
      protocol: [:title], command: [:title],
    },
  )

  before_validation :set_command_order

  resourcify

  belongs_to :protocol
  belongs_to :command
  belongs_to :command_value, optional: true

  validates :value, presence: true, allow_blank: false, allow_nil: true

  default_scope { order(order: :asc) }

  scope :includes_associated, -> { includes([:protocol, :command, :command_value]) }

  private

  def set_command_order
    return unless self.order.nil?

    last_protocol_command = protocol&.protocols_commands&.order(:order)&.last
    self.order = (last_protocol_command&.order || 0) + 1
  end
end
