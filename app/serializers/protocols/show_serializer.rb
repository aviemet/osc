class Protocols::ShowSerializer < ProtocolSerializer
  attributes(
    :id,
    :slug,
  )

  has_many :commands, serializer: Protocols::CommandsSerializer
end
