module Persisted
  extend ActiveSupport::Concern

  included do
    attributes :id

    self.timestamps
  end
end
