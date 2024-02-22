require_relative 'request_macros'

RSpec.configure do |config|
  config.include Devise::Test::IntegrationHelpers
  config.include Warden::Test::Helpers
  config.include Warden::Test::Helpers, type: :policy

  config.extend RequestMacros
  config.extend RequestMacros, type: :policy
end
