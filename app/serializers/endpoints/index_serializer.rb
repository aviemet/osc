class Endpoints::IndexSerializer < EndpointSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
