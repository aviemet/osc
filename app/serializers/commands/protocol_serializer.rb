class Commands::ProtocolSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps

  belongs_to :server, serializer: Servers::ReferenceSerializer
  has_many :command_values, serializer: CommandValueSerializer
end
