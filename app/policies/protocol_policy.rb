class ProtocolPolicy < ApplicationPolicy
  class Scope < Scope
  end

  def options?
    standard_auth(:options)
  end

  def execute?
    true
  end
end
