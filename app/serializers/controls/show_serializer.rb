class Controls::ShowSerializer < ControlSerializer
  attributes(
    :id,
  )

  self.timestamps

  belongs_to :protocol, serializer: ProtocolSerializer, optional: true
  belongs_to :command, serializer: CommandSerializer, optional: true
end
