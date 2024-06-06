class Controls::FormDataSerializer < ControlSerializer
  belongs_to :protocol, serializer: Protocols::FormDataSerializer
  belongs_to :command, serializer: Commands::FormDataSerializer
end
