# == Schema Information
#
# Table name: payloads
#
#  id          :bigint           not null, primary key
#  payload     :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  endpoint_id :bigint           not null
#
# Indexes
#
#  index_payloads_on_endpoint_id  (endpoint_id)
#
# Foreign Keys
#
#  fk_rails_...  (endpoint_id => endpoints.id)
#
require 'rails_helper'

RSpec.describe Payload, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
