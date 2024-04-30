require 'active_support/time'

class SendOscProtocolJob < OscJob
  queue_as :default

  def perform(protocol)
    server_commands = protocol.commands.select('commands.*, protocols_commands.*').group_by(&:server)

    server_commands.each do |server, commands|
      client = udp_client_from_server(server)

      commands.each do |command|
        # ap({ command: })

        send_osc_command(command, client)

        if command.delay.nil? || command.delay == 0
          send_osc_command(command, client)
        else
          SendOscCommandJob.set(wait: command.delay / 1000).perform_later(command)
        end

      end
    end

    # keep
  end
end
