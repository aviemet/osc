class ProtocolPolicy < ApplicationPolicy
  class Scope < ApplicationPolicy::Scope
  end

  def options?
    standard_auth(:options)
  end

  def execute?
    true
  end
end
