class ProtocolsCommands::IndexSerializer < ProtocolsCommandSerializer
  attributes(
    :id,
  )

  self.timestamps
end
