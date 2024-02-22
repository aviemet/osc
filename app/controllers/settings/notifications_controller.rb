module Admin
  class Settings::NotificationsController < ApplicationController

    # @route GET /settings/notifications (settings_notifications)
    def index
      render inertia: "Settings/Notifications/Index"
    end

    # @route PATCH /settings/notifications (settings_notifications)
    def update
    end
  end
end
