class ProtcolsCommandSerializer < ApplicationSerializer
  object_as :protcols_command

  identifier :id

  attributes(
    :value,
    :delay,
    :protocol_id,
    :command_id,
  )

  # belongs_to :protocol, serializer: ProtocolSerializer
  # belongs_to :command, serializer: CommandSerializer
  # belongs_to :command_value, serializer: CommandValueSerializer
end
