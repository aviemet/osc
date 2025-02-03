require "rails_helper"
require_relative "../../support/devise"

RSpec.describe "Api::Protocols", type: :request do
  login_user(:admin)

  describe "GET /api/protocols/options #options" do
    it "returns a successful response" do
      get api_protocols_options_url
      expect(response).to be_successful
    end

    it "returns protocols in options format" do
      protocol = create(:protocol)
      get api_protocols_options_url
      expect(response.parsed_body).to include(
        hash_including("id" => protocol.id, "title" => protocol.title),
      )
    end
  end

  describe "GET /api/protocols/:slug #show" do
    it "returns a successful response" do
      protocol = create(:protocol)
      get api_protocol_url(protocol)
      expect(response).to be_successful
    end

    it "returns the protocol data" do
      protocol = create(:protocol)
      get api_protocol_url(protocol)
      expect(response.parsed_body).to include(
        "id" => protocol.id,
        "title" => protocol.title,
      )
    end
  end

  describe "POST /api/protocols/:slug/execute #execute" do
    it "returns accepted status when executing protocol" do
      protocol = create(:protocol)
      put api_execute_protocol_url(protocol)

      expect(response).to have_http_status(:accepted)
    end

    it "creates an activity record" do
      protocol = create(:protocol)

      expect {
        put api_execute_protocol_url(protocol)
      }.to change {
        PublicActivity::Activity.where(
          trackable: protocol,
          key: "protocol.execute",
        ).count
      }.by(1)
    end

    it "enqueues an OSC protocol job" do
      protocol = create(:protocol)
      expect {
        put api_execute_protocol_url(protocol)
      }.to have_enqueued_job(SendOscProtocolJob).with(protocol)
    end
  end

  describe "POST /api/protocols #create" do
    it "creates a new Protocol with valid parameters" do
      valid_attributes = attributes_for(:protocol)
      expect {
        post api_protocols_url, params: { protocol: valid_attributes }
      }.to change(Protocol, :count).by(1)
    end

    it "returns created status with valid parameters" do
      valid_attributes = attributes_for(:protocol)
      post api_protocols_url, params: { protocol: valid_attributes }

      expect(response).to have_http_status(:created)
    end

    it "does not create a new Protocol with invalid parameters" do
      invalid_attributes = attributes_for(:protocol, title: nil)

      expect {
        post api_protocols_url, params: { protocol: invalid_attributes }
      }.not_to change(Protocol, :count)
    end

    it "returns not acceptable status with invalid parameters" do
      invalid_attributes = attributes_for(:protocol, title: nil)
      post api_protocols_url, params: { protocol: invalid_attributes }

      expect(response).to have_http_status(:not_acceptable)
    end
  end

  describe "PATCH /api/protocols/:slug #update" do
    it "updates the requested protocol with valid parameters" do
      protocol = create(:protocol)

      patch api_protocol_url(protocol), params: { protocol: { title: "New Title" } }
      protocol.reload
      expect(protocol.title).to eq("New Title")
    end

    it "returns created status with valid parameters" do
      protocol = create(:protocol)

      patch api_protocol_url(protocol), params: { protocol: { title: "New Title" } }
      expect(response).to have_http_status(:created)
    end

    it "does not update the protocol with invalid parameters" do
      protocol = create(:protocol)
      original_title = protocol.title

      patch api_protocol_url(protocol), params: { protocol: { title: nil } }
      protocol.reload
      expect(protocol.title).to eq(original_title)
    end

    it "returns not acceptable status with invalid parameters" do
      protocol = create(:protocol)
      invalid_attributes = attributes_for(:protocol, title: nil)

      patch api_protocol_url(protocol), params: { protocol: invalid_attributes }
      expect(response).to have_http_status(:not_acceptable)
    end
  end
end
