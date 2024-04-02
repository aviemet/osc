class SendOscCommandsJob < ApplicationJob
  queue_as :default

  def perform(protocol)
    server_commands = protocol.commands.group_by(&:server)

    server_commands.each do |server, commands|
      ap({ server:, commands: })
      client = OscService::Client.new(host: server.hostname, port: server.port)

      commands.each do |command|
        ap({ message: OscService::Message.new(command.message) })
        client.send(OscService::Message.new(command.message))
      end
    end
  rescue Errno::ECONNREFUSED
    protocol.commands.first.server.create_activity key: :hostname
  end
end
