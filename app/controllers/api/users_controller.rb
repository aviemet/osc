class Api::UsersController < Api::ApiController
  expose :user

  strong_params :user, permit: [:email, :password, :active, :first_name, :last_name, :number, table_preferences: {}, user_preferences: {}]

  # @route PATCH /api/users/:id (api_user)
  # @route PUT /api/users/:id (api_user)
  def update
    authorize user
    if user.update(user_params)
      render json: user.render, status: :created
    else
      render json: { errors: user.errors }, status: :see_other
    end
  end

  # @route PATCH /api/users/:id/update_table_preferences (api_update_table_preferences)
  def update_table_preferences
    authorize user
    if user.update(
      table_preferences: current_user.table_preferences.deep_merge(user_params[:table_preferences]),
    )
      head :ok, content_type: "text/html"
    end
  end

  # @route PATCH /api/users/:id/update_user_preferences (api_update_user_preferences)
  def update_user_preferences
    authorize user
    if user.update(
      user_preferences: current_user.user_preferences.deep_merge(user_params[:user_preferences]),
    )
      head :ok, content_type: "text/html"
    end
  end

end
