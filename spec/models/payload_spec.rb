# == Schema Information
#
# Table name: payloads
#
#  id         :bigint           not null, primary key
#  endpoint   :string           not null
#  payload    :string
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe Payload, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
