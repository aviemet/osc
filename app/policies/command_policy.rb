class CommandPolicy < ApplicationPolicy
  class Scope < Scope
  end

  def execute?
    true
  end
end
