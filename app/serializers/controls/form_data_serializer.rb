class Controls::FormDataSerializer < ControlSerializer
  attributes(
    order: { optional: true },
    title: { optional: true },
  )

  belongs_to :protocol, serializer: Protocols::FormDataSerializer, optional: true
  belongs_to :command, serializer: Commands::FormDataSerializer, optional: true
end
