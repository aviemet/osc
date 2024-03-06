class CommandsController < ApplicationController
  include Searchable

  expose :commands, -> { search(Command.includes_associated, sortable_fields) }
  expose :command, find: ->(id, scope) { scope.includes_associated.find(id) }

  # @route GET /commands (commands)
  def index
    authorize commands
    paginated_commands = commands.page(params[:page] || 1)

    render inertia: "Commands/Index", props: {
      commands: paginated_commands.render,
      pagination: -> { {
        count: commands.count,
        **pagination_data(paginated_commands)
      } }
    }
  end

  # @route GET /commands/:id (command)
  def show
    authorize command
    render inertia: "Commands/Show", props: {
      command: -> { command.render(view: :show) },
    }
  end

  # @route GET /commands/new (new_command)
  def new
    authorize Protocol.new
    render inertia: "Commands/New", props: {
      command: -> { command.render(view: :edit) },
    }
  end

  # @route GET /commands/:id/edit (edit_command)
  def edit
    authorize command
    render inertia: "Commands/Edit", props: {
      command: -> { command.render(view: :edit) },
    }
  end

  # @route POST /commands (commands)
  def create
    authorize Command.new
    if command.save
      redirect_to command, notice: "Command was successfully created."
    else
      redirect_to new_command_path, inertia: { errors: command.errors }
    end
  end

  # @route PATCH /commands/:id (command)
  # @route PUT /commands/:id (command)
  def update
    authorize command
    if command.update(command_params)
      redirect_to command, notice: "Command was successfully updated."
    else
      redirect_to edit_command_path, inertia: { errors: command.errors }
    end
  end

  # @route DELETE /commands/:id (command)
  def destroy
    authorize command
    command.destroy!
    redirect_to commands_url, notice: "Command was successfully destroyed."
  end

  private

  def sortable_fields
    %w(title message payload).freeze
  end

  def command_params
    params.require(:command).permit(:title, :message, :payload, :description)
  end
end
