class Payloads::ShowSerializer < PayloadSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
