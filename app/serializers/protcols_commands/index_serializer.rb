class ProtcolsCommands::IndexSerializer < ProtcolsCommandSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
