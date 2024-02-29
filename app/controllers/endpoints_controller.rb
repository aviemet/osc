class EndpointsController < ApplicationController
  include Searchable

  expose :endpoints, -> { search(Endpoint.includes_associated, sortable_fields) }
    expose :endpoint, find: ->(id, scope){ scope.includes_associated.find(id) }
  
  # GET /endpoints
  def index
    authorize endpoints

    paginated_endpoints = endpoints.page(params[:page] || 1).per(current_user.limit(:items))

    render inertia: "Endpoints/Index", props: {
      endpoints: -> { paginated_endpoints.render(view: :index) }
    }
  end

  # GET /endpoints/:id
  def show
    authorize endpoint
    render inertia: "Endpoints/Show", props: {
      endpoint: -> { endpoint.render(view: :show) }
    }
  end

  # GET /endpoints/new
  def new
    authorize Endpoint.new
    render inertia: "Endpoints/New", props: {
      endpoint: Endpoint.new.render(view: :new)
    }
  end

  # GET /endpoints/:id/edit
  def edit
    authorize endpoint
    render inertia: "Endpoints/Edit", props: {
      endpoint: endpoint.render(view: :edit)
    }
  end

  # POST /endpoints
  def create
    authorize Endpoint.new
    if endpoint.save
      redirect_to endpoint, notice: "Endpoint was successfully created."
    else
      redirect_to new_endpoint_path, inertia: { errors: endpoint.errors }
    end
  end

  # PATCH/PUT /endpoints/:id
  def update
    authorize endpoint
    if endpoint.update(endpoint_params)
      redirect_to endpoint, notice: "Endpoint was successfully updated."
    else
      redirect_to edit_endpoint_path, inertia: { errors: endpoint.errors }
    end
  end

  # DELETE /endpoints/:id
  def destroy
    authorize endpoint
    endpoint.destroy!
    redirect_to endpoints_url, notice: "Endpoint was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title url description).freeze
  end

  def endpoint_params
    params.require(:endpoint).permit(:title, :url, :description)
  end
end
