# == Schema Information
#
# Table name: remote_apis
#
#  id          :bigint           not null, primary key
#  auth_token  :string
#  description :text
#  root_url    :string
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class RemoteApiSerializer < ApplicationSerializer
  object_as :remote_api

  

  attributes(
    :title,
    :root_url,
    :description,
    :auth_token,
  )
end
