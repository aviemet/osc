# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]
  after_action :set_new_csrf_token, only: [:create]

  # @route GET /users/register (new_user_registration)
  def new
    first_run = false
    if User.count == 0
      flash.clear
      flash[:notice] = t('devise.registrations.first_run_create_admin')
      first_run = true
    end

    render inertia: 'Auth/Devise/Register', props: {
      user: User.new,
      first_run:,
    }
  end

  # @route GET /users/edit (edit_user_registration)
  def edit
    super
  end

  # @route POST /users (user_registration)
  def create
    build_resource(sign_up_params)

    resource.save

    yield resource if block_given?

    if resource.persisted?
      if User.count == 1
        resource.add_role :admin
      end

      if resource.active_for_authentication?
        set_flash_message! :notice, :signed_up
        sign_up(resource_name, resource)
        respond_with resource, location: after_sign_up_path_for(resource)
      else
        set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
        expire_data_after_sign_in!
        redirect_to after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      redirect_to new_user_registration_path, inertia: { errors: resource.errors }
    end
  end

  # PUT /resource
  # @route PATCH /users (user_registration)
  # @route PUT /users (user_registration)
  def update
    super
  end

  # @route DELETE /users (user_registration)
  def destroy
    super
  end

  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  def after_inactive_sign_up_path_for(resource)
    new_confirmation_path(resource, { email: resource.email })
  end

  # Set a session variable with the new csrf token
  # This will be destroyed on the next render in application_controller
  def set_new_csrf_token
    new_csrf_token = masked_authenticity_token
    session[:new_csrf_token] = new_csrf_token
  end
end
