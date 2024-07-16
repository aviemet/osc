class Commands::ShowSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  belongs_to :server, serializer: Servers::ReferenceSerializer
  has_many :protocols, serializer: Protocols::OptionsSerializer
end
