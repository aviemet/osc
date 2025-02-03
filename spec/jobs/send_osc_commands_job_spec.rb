require "rails_helper"

RSpec.describe SendOscCommandsJob, type: :job do
  describe "perform" do
    it "sends an OSC command over the network" do
      command = create(:command, server: create(:server))

      message = OscService::Message.new(command.address, 0)

      mock_socket = instance_double(UDPSocket)

      allow(UDPSocket).to receive(:new).and_return(mock_socket)
      allow(mock_socket).to receive(:bind)
      allow(mock_socket).to receive(:connect)
      allow(mock_socket).to receive(:recv)
      allow(mock_socket).to receive(:send).with(message.encode, 2)

      udp_receiver = UDPSocket.new
      udp_receiver.bind(command.server.hostname, command.server.port)

      described_class.perform_now(command)

      expect(mock_socket).to have_received(:send).with(message.encode, 2)
    end
  end
end
