class Payloads::EditSerializer < PayloadSerializer

  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
