require 'rails_helper'
require 'socket'

RSpec.describe OscService do
  let(:host) { "127.0.0.1" }
  let(:port) { 9091 }
  let(:raw_message) { "/test/message/1" }

  describe '#send' do
    it 'sends message via UDP' do
      mock_socket = instance_double(UDPSocket)

      allow(UDPSocket).to receive(:new).and_return(mock_socket)
      allow(mock_socket).to receive(:bind)
      allow(mock_socket).to receive(:connect)
      allow(mock_socket).to receive(:recv)

      message = OscService::Message.new(raw_message)

      expect(mock_socket).to receive(:send).with(message.encode, 0) # rubocop:disable RSpec/MessageSpies

      udp_receiver = UDPSocket.new
      udp_receiver.bind(host, port)

      client = OscService::Client.new(host: host, port: port)
      client.send(message)
    end
  end
end
