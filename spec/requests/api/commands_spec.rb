require 'rails_helper'

RSpec.describe "Api::Commands" do
  describe "GET /payload_types" do
    it "returns a list of payload types" do
      get api_commands_payload_types_url
      expect(response).to be_successful
    end
  end
end
