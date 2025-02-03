require "rails_helper"
require_relative "../support/devise"

RSpec.describe "/screens", type: :request do
  login_user(:admin)

  describe "GET /index" do
    context "when screens exist" do
      it "redirects to the first ordered screen" do
        main_screen = create(:screen, order: 1)
        create(:screen, order: 2)

        get screens_url
        expect(response).to redirect_to(main_screen)
      end
    end

    context "when no screens exist" do
      it "redirects to new screen path" do
        get screens_url
        expect(response).to redirect_to(new_screen_path)
      end
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      screen = create(:screen)
      get screen_url(screen)
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      screen = create(:screen)
      get edit_screen_url(screen)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Screen" do
        expect {
          post screens_url, params: { screen: attributes_for(:screen) }
        }.to change(Screen, :count).by(1)
      end

      it "redirects to the edit screen page" do
        post screens_url, params: { screen: attributes_for(:screen) }
        expect(response).to redirect_to(edit_screen_url(Screen.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Screen" do
        expect {
          post screens_url, params: { screen: attributes_for(:screen, title: nil) }
        }.not_to change(Screen, :count)
      end

      it "redirects back to the new screen page" do
        post screens_url, params: { screen: attributes_for(:screen, title: nil) }
        expect(response).to redirect_to(new_screen_url)
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      it "updates the requested screen" do
        screen = create(:screen)
        patch screen_url(screen), params: { screen: { title: "New Title" } }
        screen.reload

        expect(screen.title).to eq("New Title")
      end

      it "redirects to the screen" do
        screen = create(:screen)
        patch screen_url(screen), params: { screen: { title: "New Title" } }
        screen.reload
        expect(response).to redirect_to(edit_screen_url(screen))
      end
    end

    context "with invalid parameters" do

      it "redirects back to the edit screen page" do
        screen = create(:screen)
        patch screen_url(screen), params: { screen:  { title: "" } }
        expect(response).to redirect_to(edit_screen_url(screen))
      end

    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested screen" do
      screen = create(:screen)
      expect {
        delete screen_url(screen)
      }.to change(Screen, :count).by(-1)
    end

    it "redirects to the edit screens page" do
      screen = create(:screen)
      delete screen_url(screen)
      expect(response).to redirect_to(edit_screens_url)
    end
  end
end
