class Controls::FormDataSerializer < ControlSerializer
  belongs_to :protocol, serializer: Protocols::FormDataSerializer, optional: true
  belongs_to :command, serializer: Commands::FormDataSerializer, optional: true
end
