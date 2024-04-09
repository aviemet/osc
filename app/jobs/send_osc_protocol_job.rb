class SendOscProtocolJob < OscJob
  queue_as :default

  def perform(protocol)
    server_commands = protocol.commands.select('commands.*, protocols_commands.*').group_by(&:server)

    server_commands.each do |server, commands|
      client = udp_client_from_server(server)

      commands.each do |command|
        send_osc_command(command, client)
      end
    end
  end
end
