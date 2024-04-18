class ProtocolsCommands::IndexSerializer < ProtocolsCommandSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
