class Protocols::EditSerializer < ProtocolSerializer

  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  has_many :commands, serializer: Commands::FormDataSerializer
end
