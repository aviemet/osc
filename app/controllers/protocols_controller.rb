class ProtocolsController < ApplicationController
  include Searchable

  expose :protocols, -> { search(Protocol.includes_associated, sortable_fields) }
  expose :protocol, find: ->(id, scope) { scope.includes_associated.find(id) }

  # @route GET /protocols (protocols)
  def index
    authorize protocols
    paginated_protocols = protocols.page(params[:page] || 1)

    render inertia: "Protocols/Index", props: {
      protocols: paginated_protocols.render,
      pagination: -> { {
        count: protocols.count,
        **pagination_data(paginated_protocols)
      } }
    }
  end

  # @route GET /protocols/:id (protocol)
  # def show
  #   authorize protocol
  #   render inertia: "Protocols/Show", props: {
  #     protocol: -> { protocol.render(view: :show) },
  #   }
  # end

  # @route GET /protocols/new (new_protocol)
  def new
    authorize Protocol.new
    render inertia: "Protocols/New", props: {
      protocol: -> { protocol.render(view: :edit) },
    }
  end

  # @route GET /protocols/:id/edit (edit_protocol)
  def edit
    authorize protocol
    render inertia: "Protocols/Edit", props: {
      protocol: -> { protocol.render(view: :edit) },
    }
  end

  # @route POST /protocols (protocols)
  def create
    authorize Protocol.new
    if protocol.save
      redirect_to protocol, notice: "Protocol was successfully created."
    else
      redirect_to new_protocol_path, inertia: { errors: protocol.errors }
    end
  end

  # @route PATCH /protocols/:id (protocol)
  # @route PUT /protocols/:id (protocol)
  def update
    authorize protocol
    if protocol.update(protocol_params)
      redirect_to protocol, notice: "Protocol was successfully updated."
    else
      redirect_to edit_protocol_path, inertia: { errors: protocol.errors }
    end
  end

  # @route DELETE /protocols/:id (protocol)
  def destroy
    authorize protocol
    protocol.destroy!
    redirect_to protocols_url, notice: "Protocol was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title).freeze
  end

  def protocol_params
    params.require(:protocol).permit(:title, :description)
  end
end
