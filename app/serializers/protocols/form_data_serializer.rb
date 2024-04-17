class Protocols::FormDataSerializer < ProtocolSerializer
  attributes

  has_many :commands, serializer: Commands::FormDataSerializer
  has_many :command_values, serializer: CommandValueSerializer
end
