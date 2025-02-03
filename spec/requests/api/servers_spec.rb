require "rails_helper"
require_relative "../../support/devise"

RSpec.describe "Api::Servers", type: :request do
  login_user(:admin)

  describe "GET /index" do
    it "returns a successful response" do
      get api_servers_url
      expect(response).to be_successful
    end

    it "returns a list of servers" do
      server = create(:server)
      get api_servers_url
      expect(response.parsed_body).to include(
        hash_including("id" => server.id, "title" => server.title),
      )
    end
  end
end
