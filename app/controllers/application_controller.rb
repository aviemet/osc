class ApplicationController < ActionController::Base
  include Authentication
  include Authorization
  include InertiaCsrf
  include Localization
  include PublicActivity::StoreController
  include InertiaShare::Flash
  include InertiaShare::Auth
  include Searchable
end
