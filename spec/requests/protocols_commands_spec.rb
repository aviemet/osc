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

RSpec.describe "/protocols_commands", type: :request do

  # This should return the minimal set of attributes required to create a valid
  # ProtocolsCommand. As you add validations to ProtocolsCommand, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      ProtocolsCommand.create! valid_attributes
      get protocols_commands_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      protocols_command = ProtocolsCommand.create! valid_attributes
      get protocols_command_url(protocols_command)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_protocols_command_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      protocols_command = ProtocolsCommand.create! valid_attributes
      get edit_protocols_command_url(protocols_command)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new ProtocolsCommand" do
        expect {
          post protocols_commands_url, params: { protocols_command: valid_attributes }
        }.to change(ProtocolsCommand, :count).by(1)
      end

      it "redirects to the created protocols_command" do
        post protocols_commands_url, params: { protocols_command: valid_attributes }
        expect(response).to redirect_to(protocols_command_url(ProtocolsCommand.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new ProtocolsCommand" do
        expect {
          post protocols_commands_url, params: { protocols_command: invalid_attributes }
        }.not_to change(ProtocolsCommand, :count)
      end

      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post protocols_commands_url, params: { protocols_command: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested protocols_command" do
        protocols_command = ProtocolsCommand.create! valid_attributes
        patch protocols_command_url(protocols_command), params: { protocols_command: new_attributes }
        protocols_command.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the protocols_command" do
        protocols_command = ProtocolsCommand.create! valid_attributes
        patch protocols_command_url(protocols_command), params: { protocols_command: new_attributes }
        protocols_command.reload
        expect(response).to redirect_to(protocols_command_url(protocols_command))
      end
    end

    context "with invalid parameters" do

      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        protocols_command = ProtocolsCommand.create! valid_attributes
        patch protocols_command_url(protocols_command), params: { protocols_command: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested protocols_command" do
      protocols_command = ProtocolsCommand.create! valid_attributes
      expect {
        delete protocols_command_url(protocols_command)
      }.to change(ProtocolsCommand, :count).by(-1)
    end

    it "redirects to the protocols_commands list" do
      protocols_command = ProtocolsCommand.create! valid_attributes
      delete protocols_command_url(protocols_command)
      expect(response).to redirect_to(protocols_commands_url)
    end
  end
end
