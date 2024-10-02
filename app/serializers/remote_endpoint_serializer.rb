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
class RemoteEndpointSerializer < ApplicationSerializer
  object_as :remote_endpoint

  

  attributes(
    :title,
    :remote_api_id,
    :endpoint,
  )
end
