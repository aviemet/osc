require_relative "boot"

require "rails/all"
require_relative '../lib/middleware/check_admin_user'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Osc
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    config.time_zone = "Pacific Time (US & Canada)"

    config.autoload_paths += %W(#{config.root}/lib)

    config.generators do |g|
      g.test_framework      :rspec
      g.view_specs          false
      g.routing_specs       false

      g.template_engine     :tsx
      g.scaffold_stylesheet false
      g.stylesheets         false
      g.javascripts         false
      g.assets              false
      g.helper              false
    end

    config.active_storage.service = :local

    config.active_record.yaml_column_permitted_classes = [Symbol, Hash, Array, Time, Date, ActiveRecord::Base, ActiveSupport::HashWithIndifferentAccess]

    config.credentials.key_path = Rails.root.join("config/secrets/master.key")
    config.credentials.content_path = Rails.root.join("config/secrets/credentials.yml.enc")

    # Check for existence of admin user
    config.middleware.use CheckAdminUser

    # Establish db connection upon entering rails console
    console do
      ActiveRecord::Base.connection
    end
  end
end
