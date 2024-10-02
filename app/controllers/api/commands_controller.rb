class Api::CommandsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:execute]

  expose :commands, -> { Command.all }
  expose :command, id: -> { params[:slug] }, scope: -> { Command.includes_associated }, find_by: :slug

  strong_params :command, permit: [:title, :address, :payload_type, :allow_custom_value, :description, :server_id, command_values_attributes: [:id, :label, :value, :_destroy]]

  # @route GET /api/commands (api_commands)
  def index
    authorize commands

    render json: commands.render(view: :options), staus: :ok
  end

  # @route GET /api/commands/:slug (api_command)
  def show
    authorize command

    render json: command.render(view: :show), staus: :ok
  end

  # @route PUT /api/command/:slug/execute (api_execute_command)
  def execute
    authorize command

    command.create_activity key: :slug, owner: current_user

    SendOscCommandJob.perform_later(command)

    render json: command, status: :accepted
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
