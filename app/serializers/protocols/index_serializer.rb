class Protocols::IndexSerializer < ProtocolSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps

  has_many :commands, serializer: Commands::ProtocolSerializer
end
