class SendOscProtocolJob < OscJob
  queue_as :default

  def perform(command)
    send_osc_command(command)
  end
end
