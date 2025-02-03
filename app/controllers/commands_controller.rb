class CommandsController < ApplicationController
  expose :commands, -> { search(Command.includes_associated, sortable_fields) }
  expose :command, id: -> { params[:slug] }, scope: -> { Command.includes_associated }, find_by: :slug

  sortable_fields %w(title address payload_type)

  strong_params :command, permit: [:title, :address, :payload_type, :allow_custom_value, :description, :server_id, command_values_attributes: [:id, :label, :value, :_destroy]]

  # @route GET /commands (commands)
  def index
    authorize commands

    paginated_commands = paginate(commands, :commands)

    render inertia: "Commands/Index", props: {
      commands: paginated_commands.render,
      pagination: -> { {
        count: commands.count,
        **pagination_data(paginated_commands)
      } }
    }
  end

  # @route GET /commands/:slug (command)
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
      command: -> { command.render(view: :form_data) }
    }
  end

  # @route GET /commands/:slug/edit (edit_command)
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
      redirect_to commands_path, notice: "Command was successfully created."
    else
      redirect_to new_command_path, inertia: { errors: command.errors }
    end
  end

  # @route PATCH /commands/:slug (command)
  # @route PUT /commands/:slug (command)
  def update
    authorize command
    if command.update(command_params)
      redirect_to commands_path, notice: "Command was successfully updated."
    else
      redirect_to edit_command_path, inertia: { errors: command.errors }
    end
  end

  # @route DELETE /commands/:slug (command)
  def destroy
    authorize command
    command.destroy!
    redirect_to commands_url, notice: "Command was successfully destroyed."
  end

end
