class SendOscCommandsJob < ApplicationJob
  queue_as :default

  def perform(protocol)
    server_commands = protocol.commands.group_by(&:server)

    server_commands.each do |server, commands|
      client = OscService::Client.new(host: server.hostname, port: server.port)

      commands.each do |command|
        client.send(OscService::Message.new(command.message))
      end
    end
  end
end
