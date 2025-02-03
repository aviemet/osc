class Controls::EditSerializer < ControlSerializer

  attributes(
    :id,
  )

  self.timestamps

  belongs_to :protocol, serializer: Protocols::EditSerializer
end
