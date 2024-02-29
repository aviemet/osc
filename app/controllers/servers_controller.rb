class ServersController < ApplicationController
  include Searchable

  expose :servers, -> { search(Server.includes_associated, sortable_fields) }
    expose :server, find: ->(id, scope){ scope.includes_associated.find(id) }
  
  # GET /servers
  def index
    authorize servers

    paginated_servers = servers.page(params[:page] || 1).per(current_user.limit(:items))

    render inertia: "Servers/Index", props: {
      servers: -> { paginated_servers.render(view: :index) }
    }
  end

  # GET /servers/:id
  def show
    authorize server
    render inertia: "Servers/Show", props: {
      server: -> { server.render(view: :show) }
    }
  end

  # GET /servers/new
  def new
    authorize Server.new
    render inertia: "Servers/New", props: {
      server: Server.new.render(view: :new)
    }
  end

  # GET /servers/:id/edit
  def edit
    authorize server
    render inertia: "Servers/Edit", props: {
      server: server.render(view: :edit)
    }
  end

  # POST /servers
  def create
    authorize Server.new
    if server.save
      redirect_to server, notice: "Server was successfully created."
    else
      redirect_to new_server_path, inertia: { errors: server.errors }
    end
  end

  # PATCH/PUT /servers/:id
  def update
    authorize server
    if server.update(server_params)
      redirect_to server, notice: "Server was successfully updated."
    else
      redirect_to edit_server_path, inertia: { errors: server.errors }
    end
  end

  # DELETE /servers/:id
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
