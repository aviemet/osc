class Commands::ProtocolSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  belongs_to :server, serializer: Servers::ReferenceSerializer
  has_many :command_values, serializer: CommandValueSerializer
end
