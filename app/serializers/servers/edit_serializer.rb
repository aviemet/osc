class Servers::EditSerializer < ServerSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )
end
