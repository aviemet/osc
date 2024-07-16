class SendOscCommandsJob < OscJob
  queue_as :default

  def perform(commands, server = nil)
    client = nil
    if !server.nil?
      client = udp_client_from_server(server)
    end

    if commands.respond_to?('each')
      commands.each do |command|
        send_osc_command(command, client)
      end
    else
      send_osc_command(command, client)
    end
  end
end
