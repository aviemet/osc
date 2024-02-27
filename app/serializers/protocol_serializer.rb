# == Schema Information
#
# Table name: protocols
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ProtocolSerializer < ApplicationSerializer
  object_as :protocol

  

  attributes(
    :title,
  )
end
