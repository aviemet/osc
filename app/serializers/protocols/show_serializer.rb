class Protocols::ShowSerializer < ProtocolSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps

  has_many :commands, serializer: Protocols::CommandsSerializer
end
