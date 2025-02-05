class Controls::EditSerializer < Controls::FormDataSerializer
  attributes(:id)

  belongs_to :protocol, serializer: Protocols::EditSerializer
  belongs_to :command, serializer: Commands::EditSerializer
end
