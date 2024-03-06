class Controls::EditSerializer < ControlSerializer

  attributes(
    :id,
    :updated_at,
    :created_at,
  )

  belongs_to :protocol, serializer: Protocols::EditSerializer
end
