class ProtocolsCommands::FormDataSerializer < ProtocolsCommandSerializer
  attribute :key do
    protocols_command.id
  end
end
