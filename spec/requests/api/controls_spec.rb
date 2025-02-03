require "rails_helper"
require_relative "../../support/devise"

RSpec.describe "Api::Controls", type: :request do
  login_user(:admin)

  describe "GET /api/controls/options" do
    it "returns a successful response" do
      get api_controls_options_url
      expect(response).to be_successful
    end
  end

  describe "POST /api/controls" do
    it "creates a new Control with valid parameters" do
      screen = create(:screen)
      command = create(:command)

      expect {
        post api_controls_url, params: { control: attributes_for(:control, :with_command, command_id: command.id, screen_id: screen.id) }
      }.to change(Control, :count).by(1)

      expect(response).to have_http_status(:created)
    end

    it "fails to create Control with invalid parameters" do
      screen = create(:screen)
      command = create(:command)

      expect {
        post api_controls_url, params: { control: attributes_for(:control, :with_command, title: nil, command_id: command.id, screen_id: screen.id) }
      }.not_to change(Control, :count)

      expect(response).to have_http_status(:not_acceptable)
    end
  end

  describe "PATCH /api/controls/:id" do
    it "updates the control with valid parameters" do
      screen = create(:screen)
      command = create(:command)
      control = create(:control, :with_command, command_id: command.id, screen_id: screen.id)

      patch api_control_url(control), params: { control: { title: "New Title" } }

      control.reload
      expect(control.title).to eq("New Title")
      expect(response).to have_http_status(:created)
    end

    it "fails to update control with invalid parameters" do
      screen = create(:screen)
      command = create(:command)
      control = create(:control, :with_command, command_id: command.id, screen_id: screen.id)
      original_title = control.title

      patch api_control_url(control), params: { control: { title: nil } }

      control.reload
      expect(control.title).to eq(original_title)
      expect(response).to have_http_status(:not_acceptable)
    end
  end
end
