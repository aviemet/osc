class PayloadsController < ApplicationController
  include Searchable

  expose :payloads, -> { search(Payload.includes_associated, sortable_fields) }
  expose :payload, find: ->(id, scope) { scope.includes_associated.find(id) }

  # @route POST /payloads (payloads)
  def create
    authorize Payload.new
    if payload.save
      redirect_to payload, notice: "Payload was successfully created."
    else
      redirect_to new_payload_path, inertia: { errors: payload.errors }
    end
  end

  # @route PATCH /payloads/:id (payload)
  # @route PUT /payloads/:id (payload)
  def update
    authorize payload
    if payload.update(payload_params)
      redirect_to payload, notice: "Payload was successfully updated."
    else
      redirect_to edit_payload_path, inertia: { errors: payload.errors }
    end
  end

  # @route DELETE /payloads/:id (payload)
  def destroy
    authorize payload
    payload.destroy!
    redirect_to payloads_url, notice: "Payload was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title endpoint payload).freeze
  end

  def payload_params
    params.require(:payload).permit(:title, :endpoint, :payload)
  end
end
