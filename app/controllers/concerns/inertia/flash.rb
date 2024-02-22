require 'active_support/concern'

module Inertia::Flash
  extend ActiveSupport::Concern

  included do
    inertia_share flash: -> { {
      success: flash[:success], # green
      alert: flash[:alert], # red
      info: flash[:notice], # blue
      warning: flash[:warning] # yellow
    } }
  end
end
