require "rails_helper"
require_relative "../support/devise"

RSpec.describe "/controls", type: :request do
  login_user(:admin)

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Control" do

        screen = create(:screen)
        command = create(:command)
        attributes = attributes_for(:control, screen_id: screen.id)
        attributes[:command_id] = command.id

        expect {
          post controls_url, params: { control: attributes }
        }.to change(Control, :count).by(1)

      end

      it "redirects to the edit screen page" do
        screen = create(:screen)
        command = create(:command)
        attributes = attributes_for(:control, screen_id: screen.id)
        attributes[:command_id] = command.id

        post controls_url, params: { control: attributes }
        expect(response).to redirect_to(edit_screen_url(screen))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit screen page" do
        screen = create(:screen)
        command = create(:command)
        attributes = attributes_for(:control, title: nil, screen_id: screen.id)
        attributes[:command_id] = command.id

        post controls_url, params: { control: attributes }
        expect(response).to redirect_to(edit_screen_url(screen))
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      it "updates the requested control" do
        screen = create(:screen)
        control = create(:control, :with_command, screen_id: screen.id)
        patch control_url(control), params: { control: attributes_for(:control, title: "New Title") }
        control.reload
        expect(control.title).to eq("New Title")
      end

      it "redirects to the control" do
        screen = create(:screen)
        control = create(:control, :with_command, screen_id: screen.id)
        patch control_url(control), params: { control: attributes_for(:control, title: "New Title") }
        control.reload
        expect(response).to redirect_to(edit_screen_url(screen))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit screen page" do
        screen = create(:screen)
        control = create(:control, :with_command, screen_id: screen.id)
        patch control_url(control), params: { control: attributes_for(:control, title: nil) }
        expect(response).to redirect_to(edit_screen_url(screen))
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested control" do
      screen = create(:screen)
      control = create(:control, :with_command, screen_id: screen.id)
      expect {
        delete control_url(control)
      }.to change(Control, :count).by(-1)
    end

    it "redirects to the controls list" do
      screen = create(:screen)
      control = create(:control, :with_command, screen_id: screen.id)
      delete control_url(control)
      expect(response).to redirect_to(edit_screen_url(screen))
    end
  end
end
