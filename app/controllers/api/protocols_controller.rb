class Api::ProtocolsController < ApplicationController
  expose :protocol

  # @route PUT /api/protocol/:id/execute (api_execute_protocol)
  def execute
    protocol.create_activity key: :slug, owner: current_user

    SendOscCommandsJob.perform_later(protocol)

    render json: protocol, status: :accepted
  end
end
