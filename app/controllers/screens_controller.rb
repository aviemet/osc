class ScreensController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]

  expose :screens, -> { Screen.includes_associated }
  expose :screen, id: -> { params[:slug] }, scope: -> { Screen.includes_associated }, find_by: :slug
  expose :main_screen, -> { Screen.order(:order).first }

  sortable_fields %w(title order columns)

  strong_params :screen, permit: [:title, :order, :columns, controls_attributes: [
    :id, :title, :order, :control_type, :color, :value, :protocol_id, :command_id
  ]]

  # @route GET / (root)
  # @route GET /screens (screens)
  def index
    redirect_to main_screen || new_screen_path
  end

  # @route GET /screens/:slug (screen)
  def show
    authorize screen

    render inertia: "Screens/Show", props: {
      screen: -> { screen.render(view: :show) },
      screens: -> { Screen.all.render(view: :options) },
    }
  end

  # @route GET /screens/new (new_screen)
  def new
    authorize Screen.new

    render inertia: "Screens/New", props: {
      screen: Screen.new.render(view: :form_data)
    }
  end

  # @route GET /screens/edit (edit_screens)
  # @route GET /screens/:slug/edit (edit_screen)
  def edit
    if params[:slug].nil?
      redirect_to edit_screen_path(main_screen)
      return
    end

    authorize screen

    render inertia: "Screens/Edit", props: {
      screen: InertiaRails.always { screen.render(view: :edit) },
      screens: -> { Screen.all.render(view: :options) },
    }
  end

  # @route POST /screens (screens)
  def create
    authorize Screen.new

    if screen.save
      redirect_to edit_screen_path(screen.slug), notice: "Screen was successfully created."
    else
      redirect_to new_screen_path, inertia: { errors: screen.errors }
    end
  end

  # @route PATCH /screens/:slug (screen)
  # @route PUT /screens/:slug (screen)
  def update
    authorize screen
    ap({ path: edit_screen_path(screen.slug) })
    if screen.update(screen_params)
      redirect_to edit_screen_path(screen.slug), notice: "Screen was successfully updated."
    else
      redirect_to edit_screen_path, inertia: { errors: screen.errors }
    end
  end

  # @route DELETE /screens/:slug (screen)
  def destroy
    authorize screen

    screen.destroy!
    redirect_to edit_screens_path, notice: "Screen was successfully destroyed."
  end
end
