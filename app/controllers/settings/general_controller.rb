module Admin
  class Settings::GeneralController < ApplicationController
    # @route GET /settings/general (settings_general)
    def index
      render inertia: "Settings/General/Index"
    end

    # @route PATCH /settings/general (settings_general)
    def update
    end

  end
end
