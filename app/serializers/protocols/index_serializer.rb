class Protocols::IndexSerializer < ProtocolSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )
end
