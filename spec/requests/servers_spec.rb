require "rails_helper"
require_relative "../support/devise"

RSpec.describe "/servers", type: :request do
  login_user(:admin)

  describe "GET /index" do
    it "renders a successful response" do
      create(:server)
      get servers_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      server = create(:server)
      get server_url(server)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_server_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      server = create(:server)
      get edit_server_url(server)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Server" do
        expect {
          post servers_url, params: { server: attributes_for(:server) }
        }.to change(Server, :count).by(1)
      end

      it "redirects to the created server" do
        post servers_url, params: { server: attributes_for(:server) }
        expect(response).to redirect_to(server_url(Server.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Server" do
        expect {
          post servers_url, params: { server: attributes_for(:server, hostname: nil) }
        }.not_to change(Server, :count)
      end

      it "redirects back to the new server page" do
        post servers_url, params: { server: attributes_for(:server, hostname: nil) }
        expect(response).to redirect_to(new_server_url)
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      it "updates the requested server" do
        server = create(:server)
        patch server_url(server), params: { server: attributes_for(:server, hostname: "new.example.com") }
        server.reload
        expect(server.hostname).to eq("new.example.com")
      end

      it "redirects to the server" do
        server = create(:server)
        patch server_url(server), params: { server: attributes_for(:server, hostname: "new.example.com") }
        server.reload
        expect(response).to redirect_to(server_url(server))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit server page" do
        server = create(:server)
        patch server_url(server), params: { server: attributes_for(:server, hostname: nil) }
        expect(response).to redirect_to(edit_server_url(server))
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested server" do
      server = create(:server)
      expect {
        delete server_url(server)
      }.to change(Server, :count).by(-1)
    end

    it "redirects to the servers list" do
      server = create(:server)
      delete server_url(server)
      expect(response).to redirect_to(servers_url)
    end
  end
end
