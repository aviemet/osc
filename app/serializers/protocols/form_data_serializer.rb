class Protocols::FormDataSerializer < ProtocolSerializer
  has_many :commands, serializer: Commands::FormDataSerializer
  has_many :command_values, serializer: CommandValueSerializer
  has_many :protocols_commands, serializer: ProtocolsCommands::FormDataSerializer
end
