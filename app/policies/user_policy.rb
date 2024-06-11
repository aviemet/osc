class UserPolicy < ApplicationPolicy
  class Scope < Scope
  end

  def update_table_preferences?
    standard_auth(:options)
  end

end
