require 'rails_helper'

RSpec.describe SendOscCommandJob, type: :job do
  let(:command) { build_stubbed(:command) }

  describe 'perform' do
    it 'works' do
      mock_socket = instance_double(UDPSocket)

      allow(UDPSocket).to receive(:new).and_return(mock_socket)
      allow(mock_socket).to receive(:bind)
      allow(mock_socket).to receive(:connect)
      allow(mock_socket).to receive(:recv)

      message = OscService::Message.new(command.address)

      expect(mock_socket).to receive(:send).with(message.encode, 2) # rubocop:disable RSpec/MessageSpies

      udp_receiver = UDPSocket.new
      udp_receiver.bind(command.server.hostname, command.server.port)

      SendOscProtocolJob.perform_later(command)
    end
  end
end
