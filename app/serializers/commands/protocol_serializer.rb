class Commands::ProtocolSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  belongs_to :server, serializer: Servers::ReferenceSerializer
end
