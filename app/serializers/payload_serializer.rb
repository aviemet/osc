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
class PayloadSerializer < ApplicationSerializer
  object_as :payload

  

  attributes(
    :title,
    :endpoint,
    :payload,
  )
end
