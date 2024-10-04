class Api::ProtocolsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:execute]

  expose :protocols, -> { Protocol.includes_associated.all }
  expose :protocol, id: -> { params[:slug] }, find_by: :slug

  strong_params :protocol, permit: [:title, :description, protocols_commands_attributes: [
    :id, :protocol_id, :command_id, :command_value_id, :value, :delay, :order
  ]]

  # @route GET /api/protocols/:slug (api_protocol)
  def show
    authorize protocol
    render json: protocol.render(view: :show), status: :ok
  end

  # @route GET /api/options/protocols (api_protocols_options)
  def options
    authorize protocols
    render json: protocols.render(view: :options), status: :ok
  end

  # @route PUT /api/protocol/:slug/execute (api_execute_protocol)
  def execute
    authorize protocol

    protocol.create_activity key: :slug, owner: current_user

    SendOscProtocolJob.perform_later(protocol)

    render json: protocol, status: :accepted
  end

  # @route POST /api/protocols (api_protocols)
  def create
    if protocol.save
      render json: protocol.render, status: :created
    else
      render json: { errors: protocol.errors }, status: :not_acceptable
    end
  end

  # @route PATCH /api/protocols/:slug (api_protocol)
  # @route PUT /api/protocols/:slug (api_protocol)
  def update
    if protocol.save
      render json: protocol.render, status: :created
    else
      render json: { errors: protocol.errors }, status: :not_acceptable
    end
  end
end
