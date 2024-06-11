class Protocols::CommandsSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
    :order,
  )

  belongs_to :server, serializer: Servers::ReferenceSerializer
end
