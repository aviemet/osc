class Payloads::IndexSerializer < PayloadSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
