class RemoteEndpoints::ShowSerializer < RemoteEndpointSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
