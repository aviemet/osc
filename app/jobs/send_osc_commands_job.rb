class SendOscCommandsJob < ApplicationJob
  queue_as :default

  def perform(protocol)
    server_commands = protocol.commands.select('commands.*, protocols_commands.*').group_by(&:server)

    server_commands.each do |server, commands|
      client = OscService::Client.new(host: server.hostname, port: server.port)

      commands.each do |command|
        client.send(OscService::Message.new(command.message, cast(command.value, command.payload_type)))
      rescue Errno::ECONNREFUSED => e
        log_connection_error(command.server, e)
      end
    end
  rescue StandardError => e
    Rails.logger.error({ error: e })
  end

  private

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

  def log_connection_error(server, error)
    server.create_activity key: "connection.error", params: { error: error.to_s }
  end
end
