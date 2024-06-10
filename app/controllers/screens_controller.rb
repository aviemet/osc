class ScreensController < ApplicationController
  include Searchable

  expose :screens, -> { Screen.includes_associated }
  expose :screen, id: -> { params[:slug] }, scope: -> { Screen.includes_associated }, find_by: :slug
  expose :main_screen, -> { Screen.order(:order).first }

  # @route GET / (root)
  # @route GET /screens (screens)
  def index
    redirect_to main_screen
  end

  # @route GET /screens/:slug (screen)
  def show
    authorize screen
    render inertia: "Screens/Show", props: {
      screen: -> { screen.render(view: :show) },
      screens: -> { Screen.all.render(view: :options) },
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
      screen: -> { screen.render(view: :edit) },
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
    ap({ params:, screen_params: })
    authorize screen
    if screen.update(screen_params)
      redirect_to screen, notice: "Screen was successfully updated."
    else
      ap({ errors: screen.errors })
      redirect_to edit_screen_path, inertia: { errors: screen.errors }
    end
  end

  # @route DELETE /screens/:slug (screen)
  def destroy
    authorize screen
    screen.destroy!
    redirect_to screens_url, notice: "Screen was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title order).freeze
  end

  def screen_params
    params.require(:screen).permit(:title, :order, controls_attributes: [
      :id, :title, :order
    ],)
  end
end
