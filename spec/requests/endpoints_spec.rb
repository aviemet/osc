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

RSpec.describe "/endpoints", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # Endpoint. As you add validations to Endpoint, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      Endpoint.create! valid_attributes
      get endpoints_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      endpoint = Endpoint.create! valid_attributes
      get endpoint_url(endpoint)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_endpoint_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      endpoint = Endpoint.create! valid_attributes
      get edit_endpoint_url(endpoint)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Endpoint" do
        expect {
          post endpoints_url, params: { endpoint: valid_attributes }
        }.to change(Endpoint, :count).by(1)
      end

      it "redirects to the created endpoint" do
        post endpoints_url, params: { endpoint: valid_attributes }
        expect(response).to redirect_to(endpoint_url(Endpoint.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Endpoint" do
        expect {
          post endpoints_url, params: { endpoint: invalid_attributes }
        }.to change(Endpoint, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post endpoints_url, params: { endpoint: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested endpoint" do
        endpoint = Endpoint.create! valid_attributes
        patch endpoint_url(endpoint), params: { endpoint: new_attributes }
        endpoint.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the endpoint" do
        endpoint = Endpoint.create! valid_attributes
        patch endpoint_url(endpoint), params: { endpoint: new_attributes }
        endpoint.reload
        expect(response).to redirect_to(endpoint_url(endpoint))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        endpoint = Endpoint.create! valid_attributes
        patch endpoint_url(endpoint), params: { endpoint: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested endpoint" do
      endpoint = Endpoint.create! valid_attributes
      expect {
        delete endpoint_url(endpoint)
      }.to change(Endpoint, :count).by(-1)
    end

    it "redirects to the endpoints list" do
      endpoint = Endpoint.create! valid_attributes
      delete endpoint_url(endpoint)
      expect(response).to redirect_to(endpoints_url)
    end
  end
end
