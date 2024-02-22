module RequestMacros
  def login_admin
    before do
      @admin = FactoryBot.create(:user)
      @admin.confirm
      @admin.add_role(:super_admin)
      @admin.add_role(:admin, Company.first)
      sign_in @admin
    end
  end

  def login_user
    before do
      @user = FactoryBot.create(:user)
      @user.confirm
      @user.add_role(:admin, Company.first)
      sign_in @user
    end
  end
end
