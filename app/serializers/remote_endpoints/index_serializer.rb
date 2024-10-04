class RemoteEndpoints::IndexSerializer < RemoteEndpointSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
