class CommandPolicy < ApplicationPolicy
  class Scope < ApplicationPolicy::Scope
  end

  def execute?
    true
  end
end
