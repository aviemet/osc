module RequestMacros
  def login_user(role)
    before do
      @user = FactoryBot.create(:user, confirmed_at: Time.current)
      @user.add_role(role)
      sign_in @user
    end
  end
end
