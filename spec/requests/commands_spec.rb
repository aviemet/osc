require "rails_helper"
require_relative "../support/devise"

RSpec.describe "/commands", type: :request do
  login_user(:admin)

  describe "GET /index" do
    it "renders a successful response" do
      create(:command)
      get commands_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      command = create(:command)
      get command_url(command)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_command_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      command = create(:command)
      get edit_command_url(command)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Command" do
        server = create(:server)
        expect {
          post commands_url, params: { command: attributes_for(:command, server_id: server.id) }
        }.to change(Command, :count).by(1)
      end

      it "redirects to the commands index page" do
        server = create(:server)
        attributes = attributes_for(:command)
        attributes[:server_id] = server.id

        post commands_url, params: { command: attributes }

        expect(response).to redirect_to(commands_url)
      end
    end

    context "with invalid parameters" do
      it "does not create a new Command" do
        expect {
          post commands_url, params: { command: attributes_for(:command, title: nil) }
        }.not_to change(Command, :count)
      end

      it "redirects back to the new command page" do
        post commands_url, params: { command: attributes_for(:command, title: nil) }
        expect(response).to redirect_to(new_command_url)
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      it "updates the requested command" do
        server = create(:server)
        command = create(:command, server_id: server.id)
        patch command_url(command), params: { command: attributes_for(:command, title: "New Name") }
        command.reload

        expect(command.title).to eq("New Name")
      end

      it "redirects to the commands index page" do
        server = create(:server)
        command = create(:command, server_id: server.id)
        patch command_url(command), params: { command: attributes_for(:command, title: "New Name") }
        command.reload

        expect(response).to redirect_to(commands_url)
      end
    end

    context "with invalid parameters" do

      it "redirects back to the edit command page" do
        server = create(:server)
        command = create(:command, server_id: server.id)

        patch command_url(command), params: { command: attributes_for(:command, title: nil) }

        expect(response).to redirect_to(edit_command_url(command))
      end

    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested command" do
      server = create(:server)
      command = create(:command, server_id: server.id)
      expect {
        delete command_url(command)
      }.to change(Command, :count).by(-1)
    end

    it "redirects to the commands list" do
      server = create(:server)
      command = create(:command, server_id: server.id)
      delete command_url(command)
      expect(response).to redirect_to(commands_url)
    end
  end
end
