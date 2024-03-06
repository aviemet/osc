class Api::ProtocolsController < ApplicationController
  expose :protocol

  # @route PUT /api/protocol/:id/execute (api_execute_protocol)
  def execute
    render json: protocol, status: :accepted
    SendOscCommandsJob.perform_later(protocol)
  end
end
