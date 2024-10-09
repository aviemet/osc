class Protocols::EditSerializer < Protocols::FormDataSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps

  has_many :commands, serializer: Commands::FormDataSerializer
  # has_many :commands, serializer: Protocols::CommandsSerializer
end
