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
class ProtocolsCommandSerializer < ApplicationSerializer
  identifier :id

  attributes(
    :value,
    :delay,
    :protocol_id,
    :command_id,
    :command_value_id,
    :order,
  )

  # belongs_to :protocol, serializer: ProtocolSerializer
  # belongs_to :command, serializer: CommandSerializer
  belongs_to :command_value, serializer: CommandValueSerializer
end
