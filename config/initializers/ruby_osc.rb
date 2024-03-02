require 'singleton'

module OSCServerManager
  def self.server_for_host(host: nil, port: nil)
    server_host = host.nil? ? "localhost" : host
    server_port = port.nil? ? 9090 : port

    @servers ||= {}
    @servers["#{server_host}:#{server_port}"] ||= OSCServer.new(host: server_host, port: server_port)
  end

  def self.threads
    @threads ||= {}
  end
end

class OSCServer
  attr_reader :server, :client

  def initialize(host:, port:)
    # OSCServerManager.threads["#{host}:#{port}"] = Thread.new do
    OSC.run do
      @server = OSC::Server.new(port, host)
      @client = OSC::Client.new(port, host)

      @server.add_pattern(/.*/) do |*args|
        p "/.*/:#{args.join(', ')}"
      end
    end
    # end
  end

  def send_osc_message(path, *args)
    # OSCServerManager.threads["#{host}:#{port}"]

    message = OSC::Message.new(path)
    ap({ path:, args:, client: @client, message: })
    @client.send(message)
  end
end
