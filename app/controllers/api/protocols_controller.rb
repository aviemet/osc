class Api::ProtocolsController < ApplicationController
  expose :protocols, -> { Protocol.includes_associated.all }
  expose :protocol, id: -> { params[:slug] }, find_by: :slug

  skip_before_action :authenticate_user!, only: [:execute]

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

  # @route PUT /api/protocol/:id/execute (api_execute_protocol)
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
