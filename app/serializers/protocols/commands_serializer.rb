class Protocols::CommandsSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
    :order,
    value: { type: :string },
    command_value_id: { type: :number },
  )

  belongs_to :server, serializer: Servers::ReferenceSerializer
end
