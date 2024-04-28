class Protocols::EditSerializer < ProtocolSerializer

  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  has_many :commands, serializer: Commands::FormDataSerializer
  has_many :protocols_commands, serializer: ProtocolsCommands::FormDataSerializer
end
