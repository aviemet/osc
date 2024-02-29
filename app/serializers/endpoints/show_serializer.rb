class Endpoints::ShowSerializer < EndpointSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
