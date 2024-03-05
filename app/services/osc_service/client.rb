require "socket"

module OscService
  class Client
    def initialize(host: "127.0.0.1", port: 9091)
      @socket = UDPSocket.new
      @socket.connect host, port
    end

    def send(msg, *_args)
      @socket.send msg.encode, 0
    end
  end
end
