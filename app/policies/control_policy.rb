class ControlPolicy < ApplicationPolicy
  class Scope < ApplicationPolicy::Scope
  end

  def options?
    standard_auth(:options)
  end
end
