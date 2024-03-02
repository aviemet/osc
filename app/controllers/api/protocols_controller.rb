class Api::ProtocolsController < ApplicationController
  expose :protocol

  def execute
    render json: protocol, status: :accepted
    SendOscCommandsJob.perform_later(protocol)
  end
end
