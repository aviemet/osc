# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]
  after_action :set_new_csrf_token, only: [:create, :destroy]

  # @route GET /login (new_user_session)
  def new
    render inertia: "Auth/Devise/Login"
  end

  # @route POST /login (user_session)
  def create
    # super
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    yield resource if block_given?
    respond_with resource, location: session[:user_return_to] || after_sign_in_path_for(resource)
  end

  # @route GET /logout (destroy_user_session)
  def destroy
    # super
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    yield if block_given?
    respond_to_on_destroy
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end

  # Set a session variable with the new csrf token
  # This will be destroyed on the next render in application_controller
  def set_new_csrf_token
    new_csrf_token = masked_authenticity_token
    session[:new_csrf_token] = new_csrf_token
  end
end
