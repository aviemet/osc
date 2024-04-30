class SendOscCommandJob < OscJob
  queue_as :default

  def perform(command)
    ap({ command: })
    send_osc_command(command)
  end
end
