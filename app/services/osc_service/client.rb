require "socket"

module OscService
  class Client
    def initialize(host: "127.0.0.1", port: 9091)
      @socket = UDPSocket.new
      @socket = UDPSocket.open
      @socket.setsockopt(Socket::SOL_SOCKET, Socket::SO_BROADCAST, true)
      @socket.connect host, port
    end

    def send(mesg, *_args)
      @socket.send mesg.encode, 0
    end
  end
end
