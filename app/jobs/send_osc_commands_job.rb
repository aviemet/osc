class SendOscCommandsJob < ApplicationJob
  queue_as :default

  def perform(protocol)
    server_commands = protocol.commands.group_by(&:server)

    server_commands.each do |server, commands|
      ap({ server:, commands: })
      osc_server = OSCServerManager.server_for_host(host: server.hostname, port: server.port)

      commands.each do |command|
        osc_server.send_osc_message(command.endpoint)
      end
    end
  end
end
