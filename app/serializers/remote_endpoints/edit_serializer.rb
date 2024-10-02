class RemoteEndpoints::EditSerializer < RemoteEndpointSerializer

  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
