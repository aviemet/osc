class Api::ControlsController < ApplicationController
  expose :control
  expose :controls, -> { Control.all }

  # @route GET /api/options/controls (api_controls_options)
  def options
    authorize controls
    render json: controls.render(view: :options), status: :ok
  end

  def execute
    authorize control

    control.create_activity key: :slug, owner: current_user

    SendOscProtocolJob.perform_later(control)

    render json: control, status: :accepted
  end

  # @route POST /api/controls (api_controls)
  def create
    if control.save
      render json: control.render, status: :created
    else
      render json: { errors: control.errors }, status: :not_acceptable
    end
  end

  # @route PATCH /api/controls/:id (api_control)
  # @route PUT /api/controls/:id (api_control)
  def update
    if control.save
      render json: control.render, status: :created
    else
      render json: { errors: control.errors }, status: :not_acceptable
    end
  end
end
