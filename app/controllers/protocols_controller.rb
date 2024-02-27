class ProtocolsController < ApplicationController
  include Searchable

  expose :protocols, -> { search(Protocol.includes_associated, sortable_fields) }
  expose :protocol, find: ->(id, scope) { scope.includes_associated.find(id) }

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
    params.require(:protocol).permit(:title)
  end
end
