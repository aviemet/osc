class OscJob < ApplicationJob

  private

  def send_osc_command(command, client = nil)
    client ||= udp_client_from_server(command[:server])

    # pry command
    message = OscService::Message.new(
      command[:address],
      cast_to_type(command[:value], command[:payload_type]),
    )

    client.send(message)
  rescue Errno::ECONNREFUSED => e
    server = command[:server] || Server.find(command[:server_id])
    log_connection_error(server, e)
  rescue StandardError => e
    Rails.logger.error({ error: e })
  end

  def udp_client_from_server(server)
    OscService::Client.new(
      host: server[:hostname],
      port: server[:port],
    )
  end

  def cast_to_type(value, type)
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
    server&.create_activity key: "connection.error", params: { error: error.to_s }
  end
end
