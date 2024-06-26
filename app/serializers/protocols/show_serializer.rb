class Protocols::ShowSerializer < ProtocolSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  has_many :commands, serializer: Protocols::CommandsSerializer
end
