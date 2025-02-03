require "rails_helper"
require_relative "../support/devise"

RSpec.describe "/protocols", type: :request do
  login_user(:admin)

  describe "GET /index" do
    it "renders a successful response" do
      create(:protocol)
      get protocols_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      protocol = create(:protocol)
      get protocol_url(protocol)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_protocol_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      protocol = create(:protocol)
      get edit_protocol_url(protocol)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Protocol" do
        expect {
          post protocols_url, params: { protocol: attributes_for(:protocol) }
        }.to change(Protocol, :count).by(1)
      end

      it "redirects to the created protocol" do
        post protocols_url, params: { protocol: attributes_for(:protocol) }
        expect(response).to redirect_to(protocol_url(Protocol.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Protocol" do
        expect {
          post protocols_url, params: { protocol: attributes_for(:protocol, title: nil) }
        }.not_to change(Protocol, :count)
      end

      it "redirects back to the new protocol page" do
        post protocols_url, params: { protocol: attributes_for(:protocol, title: nil) }
        expect(response).to redirect_to(new_protocol_url)
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      it "updates the requested protocol" do
        protocol = create(:protocol)
        patch protocol_url(protocol), params: { protocol: attributes_for(:protocol, title: "New Title") }
        protocol.reload
        expect(protocol.title).to eq("New Title")
      end

      it "redirects to the protocol" do
        protocol = create(:protocol)
        patch protocol_url(protocol), params: { protocol: attributes_for(:protocol, title: "New Title") }
        protocol.reload
        expect(response).to redirect_to(protocol_url(protocol))
      end
    end

    context "with invalid parameters" do
      it "redirects back to the edit protocol page" do
        protocol = create(:protocol)
        patch protocol_url(protocol), params: { protocol: attributes_for(:protocol, title: nil) }
        expect(response).to redirect_to(edit_protocol_url(protocol))
      end

    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested protocol" do
      protocol = create(:protocol)
      expect {
        delete protocol_url(protocol)
      }.to change(Protocol, :count).by(-1)
    end

    it "redirects to the protocols list" do
      protocol = create(:protocol)
      delete protocol_url(protocol)
      expect(response).to redirect_to(protocols_url)
    end
  end
end
