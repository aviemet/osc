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
class PayloadSerializer < ApplicationSerializer
  object_as :payload

  

  attributes(
    :title,
    :endpoint,
    :payload,
  )
end
