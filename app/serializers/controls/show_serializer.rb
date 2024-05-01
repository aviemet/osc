class Controls::ShowSerializer < ControlSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )

  belongs_to :protocol, serializer: Protocols::ShowSerializer
  belongs_to :command, serializer: Commands::ShowSerializer
end
