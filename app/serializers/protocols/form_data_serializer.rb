class Protocols::FormDataSerializer < ProtocolSerializer
  attributes

  has_many :commands, serializer: Commands::FormDataSerializer
end
