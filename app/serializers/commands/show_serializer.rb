class Commands::ShowSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps

  belongs_to :server, serializer: Servers::ReferenceSerializer
  has_many :protocols, serializer: Protocols::OptionsSerializer
end
