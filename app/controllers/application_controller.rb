class ApplicationController < ActionController::Base
  include Pundit::Authorization
  include PublicActivity::StoreController

  protect_from_forgery with: :exception

  # Inertia requests do not need authenticity verification as they are not
  # subject to the same vulnerability as a standard web request
  skip_before_action :verify_authenticity_token, if: -> { request.inertia? }

  before_action :set_locale
  before_action :remove_empty_query_parameters
  before_action :authenticate_user!

  add_flash_types :success, :error, :warning

  include Inertia::Flash
  include Inertia::Auth

  inertia_share do
    share_object = {
      menu: nil,
    }

    if current_user
      share_object[:menu] = {}
    end

    share_object
  end

  rescue_from Pundit::NotAuthorizedError do |exception|
    flash[:warning] = exception.message
    redirect_to root_path
  end

  def pagination_data(model)
    return if !model.respond_to? :total_pages

    {
      pages: model.total_pages,
      limit: model.limit_value,
      current_page: model.current_page,
      next_page: model.next_page,
      prev_page: model.prev_page,
      is_first_page: model.first_page?,
      is_last_page: model.last_page?
    }
  end

  def currencies
    Monetize::Parser::CURRENCY_SYMBOLS.map { |sym, abbr| { symbol: sym, code: abbr } }
  end

  def after_sign_in_path_for(_resouce)
    screens_path
  end

  private

  def set_locale
    locale = params[:locale].to_s.strip.to_sym
    I18n.locale = I18n.available_locales.include?(locale) ? locale : I18n.default_locale
  end

  def remove_empty_query_parameters
    # Filter out empty query parameters
    non_empty_params = request.query_parameters.compact_blank

    # Remove direction param if table is not sorted
    if non_empty_params['direction'].present? && non_empty_params['sort'].blank?
      non_empty_params.delete('direction')
    end

    return unless request.query_parameters.keys.length > non_empty_params.keys.length

    # Rebuild the URL without empty query parameters
    new_url = "#{request.path}?#{non_empty_params.to_param}"
    redirect_to new_url
  end
end
