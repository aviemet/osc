class Api::ControlsController < ApplicationController
  expose :controls, -> { Control.all }
  expose :control

  strong_params :control, permit: [:title, :control_type, :order, :color, :screen_id, :min_value, :max_value, :value, :command_id, :protocol_id]

  # @route GET /api/options/controls (api_controls_options)
  def options
    authorize controls
    render json: controls.render(view: :options), status: :ok
  end

  # @route POST /api/controls (api_controls)
  def create
    authorize Control.new

    if control.save
      render json: control.render, status: :created
    else
      render json: { errors: control.errors }, status: :not_acceptable
    end
  end

  # @route PATCH /api/controls/:id (api_control)
  # @route PUT /api/controls/:id (api_control)
  def update
    authorize control

    if control.update(control_params)
      render json: control.render, status: :created
    else
      render json: { errors: control.errors }, status: :not_acceptable
    end
  end
end
