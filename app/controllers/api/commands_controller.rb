class Api::CommandsController < ApplicationController
  expose :commands
  expose :command, id: -> { params[:slug] }, scope: -> { Command.includes_associated }, find_by: :slug

  # @route GET /api/commands (api_commands)
  def index
    render json: {}, staus: :ok
  end

  # @route GET /api/commands/:slug (api_command)
  def show
    render json: {}, staus: :ok
  end

  # @route GET /api/commands/payload_types (api_commands_payload_types)
  def payload_types
    types_array = []
    Command.payload_types.each { |key, value| types_array[value] = key }
    render json: types_array, status: :ok
  end

  # @route POST /api/commands (api_commands)
  def create
    render json: {}, staus: :ok
  end

  # @route PATCH /api/commands/:slug (api_command)
  # @route PUT /api/commands/:slug (api_command)
  def update
    render json: {}, staus: :ok
  end

  # @route DELETE /api/commands/:slug (api_command)
  def destroy
    render json: {}, staus: :ok
  end
end
