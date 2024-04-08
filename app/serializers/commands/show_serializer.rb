class Commands::ShowSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  belongs_to :server, serializer: ServerSerializer
end
