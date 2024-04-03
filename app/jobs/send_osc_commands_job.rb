class SendOscCommandsJob < ApplicationJob
  queue_as :default

  def perform(protocol)
    server_commands = protocol.commands.select('commands.*, protocols_commands.*').group_by(&:server)

    server_commands.each do |server, commands|
      client = OscService::Client.new(host: server.hostname, port: server.port)
      ap({ server:, client: })

      commands.each do |command|
        ap({
          command:,
          message: OscService::Message.new(command.message, cast(command.value, command.payload_type))
        })
        client.send(OscService::Message.new(command.message, cast(command.value, command.payload_type)))
      end
    end
  rescue Errno::ECONNREFUSED => e
    ap({ connection: e })
    protocol.commands.first.server.create_activity key: :hostname
  rescue StandardError => e
    ap({ other: e })
  end

  def cast(value, type)
    case type
    when nil
      ""
    when "integer"
      value.to_i
    when "float"
      value.to_f
    when "blob"
      value.bytes
    when "time"
      Date.parse(value)
    when "boolean"
      ActiveModel::Type::Boolean.new.cast(value)
    else
      value
    end
  end
end
