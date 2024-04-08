class Api::ServersController < ApplicationController
  expose :server
  expose :servers, -> { Server.all }

  # @route GET /api/servers (api_servers)
  def index
    render json: servers.render(view: :options), staus: :ok
  end

  # @route GET /api/servers/:id (api_server)
  def show
    render json: server, staus: :ok
  end

  # @route POST /api/servers (api_servers)
  def create
    render json: {}, staus: :ok
  end

  # @route PATCH /api/servers/:id (api_server)
  # @route PUT /api/servers/:id (api_server)
  def update
    render json: {}, staus: :ok
  end

  # @route DELETE /api/servers/:id (api_server)
  def destroy
    render json: {}, staus: :ok
  end
end
