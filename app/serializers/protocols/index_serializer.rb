class Protocols::IndexSerializer < ProtocolSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  has_many :commands, serializer: Commands::ProtocolSerializer
end
