class Controls::ShowSerializer < ControlSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )

  belongs_to :protocol, serializer: Protocols::ShowSerializer
end
