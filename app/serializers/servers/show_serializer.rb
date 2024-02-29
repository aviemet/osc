class Servers::ShowSerializer < ServerSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
