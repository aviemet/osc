# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  description :text
#  hostname    :string
#  port        :integer
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ServerSerializer < ApplicationSerializer
  object_as :server

  

  attributes(
    :title,
    :hostname,
    :port,
    :description,
  )
end
