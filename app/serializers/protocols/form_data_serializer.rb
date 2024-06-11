class Protocols::FormDataSerializer < ProtocolSerializer
  has_many :commands, serializer: Commands::FormDataSerializer
  has_many :protocols_commands, serializer: ProtocolsCommands::FormDataSerializer
end
