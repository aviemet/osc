class ControlsController < ApplicationController
  include Searchable

  expose :controls, -> { search(Control.includes_associated, sortable_fields) }
  expose :control, find: ->(id, scope) { scope.includes_associated.find(id) }

  # @route POST /controls (controls)
  def create
    authorize Control.new
    if control.save
      redirect_to control, notice: "Control was successfully created."
    else
      redirect_to new_control_path, inertia: { errors: control.errors }
    end
  end

  # @route PATCH /controls/:id (control)
  # @route PUT /controls/:id (control)
  def update
    authorize control

    if control.update(control_params)
      redirect_to edit_screen_path(control.screen), inertia: { method: :get }, notice: "Control was successfully updated."
    else
      redirect_to edit_control_path, inertia: { errors: control.errors }
    end
  end

  # @route DELETE /controls/:id (control)
  def destroy
    authorize control
    control.destroy!
    redirect_to controls_url, notice: "Control was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title type screen_id min_value max_value value protocol_id).freeze
  end

  def control_params
    params.require(:control).permit(:title, :control_type, :order, :color, :screen_id, :min_value, :max_value, :value, :protocol_id)
  end
end
