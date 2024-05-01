class ServersController < ApplicationController
  include Searchable

  expose :servers, -> { search(Server.includes_associated, sortable_fields) }
  expose :server, id: -> { params[:slug] }, scope: -> { Server.includes_associated }, find_by: :slug

  # @route GET /servers (servers)
  def index
    authorize servers

    paginated_servers = servers.page(params[:page] || 1).per(current_user.limit(:items))

    render inertia: "Servers/Index", props: {
      servers: -> { paginated_servers.render(view: :index) }
    }
  end

  # @route GET /servers/:slug (server)
  def show
    authorize server
    render inertia: "Servers/Show", props: {
      server: -> { server.render(view: :show) }
    }
  end

  # @route GET /servers/new (new_server)
  def new
    authorize Server.new
    render inertia: "Servers/New", props: {
      server: Server.new.render(view: :form_data)
    }
  end

  # @route GET /servers/:slug/edit (edit_server)
  def edit
    authorize server
    render inertia: "Servers/Edit", props: {
      server: server.render(view: :edit)
    }
  end

  # @route POST /servers (servers)
  def create
    authorize Server.new
    if server.save
      redirect_to server, notice: "Server was successfully created."
    else
      redirect_to new_server_path, inertia: { errors: server.errors }
    end
  end

  # @route PATCH /servers/:slug (server)
  # @route PUT /servers/:slug (server)
  def update
    authorize server
    if server.update(server_params)
      redirect_to server, notice: "Server was successfully updated."
    else
      redirect_to edit_server_path, inertia: { errors: server.errors }
    end
  end

  # @route DELETE /servers/:slug (server)
  def destroy
    authorize server
    server.destroy!
    redirect_to servers_url, notice: "Server was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title hostname port description).freeze
  end

  def server_params
    params.require(:server).permit(:title, :hostname, :port, :description)
  end
end
