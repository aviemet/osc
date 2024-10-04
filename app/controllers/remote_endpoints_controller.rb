class RemoteEndpointsController < ApplicationController
  include Searchable

  expose :remote_endpoints, -> { search(RemoteEndpoint.includes_associated, sortable_fields) }
    expose :remote_endpoint, find: ->(id, scope){ scope.includes_associated.find(id) }
  
  # @route GET /remote_endpoints (remote_endpoints)
  def index
    authorize remote_endpoints

    paginated_remote_endpoints = remote_endpoints.page(params[:page] || 1).per(current_user.limit(:items))

    render inertia: "RemoteEndpoints/Index", props: {
      remote_endpoints: -> { paginated_remote_endpoints.render(view: :index) }
    }
  end

  # @route GET /remote_endpoints/:slug (remote_endpoint)
  def show
    authorize remote_endpoint
    render inertia: "RemoteEndpoints/Show", props: {
      remote_endpoint: -> { remote_endpoint.render(view: :show) }
    }
  end

  # @route GET /remote_endpoints/new (new_remote_endpoint)
  def new
    authorize RemoteEndpoint.new
    render inertia: "RemoteEndpoints/New", props: {
      remote_endpoint: RemoteEndpoint.new.render(view: :new)
    }
  end

  # @route GET /remote_endpoints/:slug/edit (edit_remote_endpoint)
  def edit
    authorize remote_endpoint
    render inertia: "RemoteEndpoints/Edit", props: {
      remote_endpoint: remote_endpoint.render(view: :edit)
    }
  end

  # @route POST /remote_endpoints (remote_endpoints)
  def create
    authorize RemoteEndpoint.new
    if remote_endpoint.save
      redirect_to remote_endpoint, notice: "Remote endpoint was successfully created."
    else
      redirect_to new_remote_endpoint_path, inertia: { errors: remote_endpoint.errors }
    end
  end

  # @route PATCH /remote_endpoints/:slug (remote_endpoint)
  # @route PUT /remote_endpoints/:slug (remote_endpoint)
  def update
    authorize remote_endpoint
    if remote_endpoint.update(remote_endpoint_params)
      redirect_to remote_endpoint, notice: "Remote endpoint was successfully updated."
    else
      redirect_to edit_remote_endpoint_path, inertia: { errors: remote_endpoint.errors }
    end
  end

  # @route DELETE /remote_endpoints/:slug (remote_endpoint)
  def destroy
    authorize remote_endpoint
    remote_endpoint.destroy!
    redirect_to remote_endpoints_url, notice: "Remote endpoint was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title remote_api_id endpoint).freeze
  end

  def remote_endpoint_params
    params.require(:remote_endpoint).permit(:title, :remote_api_id, :endpoint)
  end
end
