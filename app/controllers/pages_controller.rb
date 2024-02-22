class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  # GET /
  # @route GET / (root)
  def home
    render inertia: "Public/Pages/Home", props: {}
  end
end
