class SendOscProtocolJob < OscJob
  queue_as :default

  # Builds a list of commands, groups them by delay, sends each group to send_osc_commands_job
  def perform(protocol)
    server_commands = protocol
      .commands
      .includes(:server)
      .group_by(&:server)

    # Process commands by server
    server_commands.each do |server, commands|
      delay = 0
      commands_grouped_by_delay = []

      commands.map(&:attributes).map(&:with_indifferent_access).each do |command|
        if command[:delay].nil? || command[:delay] == 0
          commands_grouped_by_delay.push(command)
          next
        end

        # When a command has a delay, send off the batch and start fresh
        delay += command[:delay]

        SendOscCommandsJob.set(wait: delay / 1000).perform_later(commands_grouped_by_delay, server)

        commands_grouped_by_delay = [command]
      end

      SendOscCommandsJob.set(wait: delay / 1000).perform_later(commands_grouped_by_delay, server)
    end
  end

  private

  def serialize_commands(commands)
    commands.map do |command|
      command.attributes.with_indifferent_access
    end
  end
end
