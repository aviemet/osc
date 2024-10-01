class RemoteApisController < ApplicationController
  include Searchable

  expose :remote_apis, -> { search(RemoteApi.includes_associated, sortable_fields) }
    expose :remote_api, find: ->(id, scope){ scope.includes_associated.find(id) }
  
  # GET /remote_apis
  def index
    authorize remote_apis

    paginated_remote_apis = remote_apis.page(params[:page] || 1).per(current_user.limit(:items))

    render inertia: "RemoteApis/Index", props: {
      remote_apis: -> { paginated_remote_apis.render(view: :index) }
    }
  end

  # GET /remote_apis/:id
  def show
    authorize remote_api
    render inertia: "RemoteApis/Show", props: {
      remote_api: -> { remote_api.render(view: :show) }
    }
  end

  # GET /remote_apis/new
  def new
    authorize RemoteApi.new
    render inertia: "RemoteApis/New", props: {
      remote_api: RemoteApi.new.render(view: :new)
    }
  end

  # GET /remote_apis/:id/edit
  def edit
    authorize remote_api
    render inertia: "RemoteApis/Edit", props: {
      remote_api: remote_api.render(view: :edit)
    }
  end

  # POST /remote_apis
  def create
    authorize RemoteApi.new
    if remote_api.save
      redirect_to remote_api, notice: "Remote api was successfully created."
    else
      redirect_to new_remote_api_path, inertia: { errors: remote_api.errors }
    end
  end

  # PATCH/PUT /remote_apis/:id
  def update
    authorize remote_api
    if remote_api.update(remote_api_params)
      redirect_to remote_api, notice: "Remote api was successfully updated."
    else
      redirect_to edit_remote_api_path, inertia: { errors: remote_api.errors }
    end
  end

  # DELETE /remote_apis/:id
  def destroy
    authorize remote_api
    remote_api.destroy!
    redirect_to remote_apis_url, notice: "Remote api was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title root_url description auth_token).freeze
  end

  def remote_api_params
    params.require(:remote_api).permit(:title, :root_url, :description, :auth_token)
  end
end
