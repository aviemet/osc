class Protocols::EditSerializer < Protocols::FormDataSerializer
  attributes(
    :id,
    :slug,
  )

  has_many :commands, serializer: Commands::FormDataSerializer
  # has_many :commands, serializer: Protocols::CommandsSerializer
end
