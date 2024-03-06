require 'rails_helper'
require 'socket'

RSpec.describe OscService do
  let(:command) { build(:command) }

  describe '#send' do
    it 'sends message via UDP' do
      mock_socket = instance_double(UDPSocket)

      allow(UDPSocket).to receive(:new).and_return(mock_socket)
      allow(mock_socket).to receive(:bind)
      allow(mock_socket).to receive(:connect)
      allow(mock_socket).to receive(:recv)

      message = OscService::Message.new(command.message)

      expect(mock_socket).to receive(:send).with(message.encode, 0) # rubocop:disable RSpec/MessageSpies

      udp_receiver = UDPSocket.new
      udp_receiver.bind(command.server.hostname, command.server.port)

      client = OscService::Client.new(host: command.server.hostname, port: command.server.port)
      client.send(message)
    end
  end
end
