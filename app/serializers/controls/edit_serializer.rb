class Controls::EditSerializer < ControlSerializer

  attributes(
    :id,
    :updated_at,
    :created_at,
  )

  has_many :commands, serializer: Commands::EditSerializer
end
