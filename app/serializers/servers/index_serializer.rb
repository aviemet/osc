class Servers::IndexSerializer < ServerSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
