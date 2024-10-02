# == Schema Information
#
# Table name: remote_endpoints
#
#  id            :bigint           not null, primary key
#  endpoint      :string
#  title         :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  remote_api_id :bigint           not null
#
# Indexes
#
#  index_remote_endpoints_on_remote_api_id  (remote_api_id)
#
# Foreign Keys
#
#  fk_rails_...  (remote_api_id => remote_apis.id)
#
require 'rails_helper'

RSpec.describe RemoteEndpoint, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
