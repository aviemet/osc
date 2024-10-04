module Api
  class ApiController < ActionController::Base
    include Authentication
    include Authorization
    include Localization
    include PublicActivity::StoreController
    include Searchable
    include StrongParams

    skip_before_action :verify_authenticity_token
  end
end
