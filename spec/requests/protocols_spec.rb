require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/protocols", type: :request do

  # This should return the minimal set of attributes required to create a valid
  # Protocol. As you add validations to Protocol, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      Protocol.create! valid_attributes
      get protocols_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      protocol = Protocol.create! valid_attributes
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
      protocol = Protocol.create! valid_attributes
      get edit_protocol_url(protocol)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Protocol" do
        expect {
          post protocols_url, params: { protocol: valid_attributes }
        }.to change(Protocol, :count).by(1)
      end

      it "redirects to the created protocol" do
        post protocols_url, params: { protocol: valid_attributes }
        expect(response).to redirect_to(protocol_url(Protocol.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Protocol" do
        expect {
          post protocols_url, params: { protocol: invalid_attributes }
        }.not_to change(Protocol, :count)
      end

      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post protocols_url, params: { protocol: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested protocol" do
        protocol = Protocol.create! valid_attributes
        patch protocol_url(protocol), params: { protocol: new_attributes }
        protocol.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the protocol" do
        protocol = Protocol.create! valid_attributes
        patch protocol_url(protocol), params: { protocol: new_attributes }
        protocol.reload
        expect(response).to redirect_to(protocol_url(protocol))
      end
    end

    context "with invalid parameters" do

      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        protocol = Protocol.create! valid_attributes
        patch protocol_url(protocol), params: { protocol: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested protocol" do
      protocol = Protocol.create! valid_attributes
      expect {
        delete protocol_url(protocol)
      }.to change(Protocol, :count).by(-1)
    end

    it "redirects to the protocols list" do
      protocol = Protocol.create! valid_attributes
      delete protocol_url(protocol)
      expect(response).to redirect_to(protocols_url)
    end
  end
end
