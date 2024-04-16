# == Schema Information
#
# Table name: protocols
#
#  id          :bigint           not null, primary key
#  description :text
#  slug        :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_protocols_on_slug  (slug) UNIQUE
#
class ProtocolSerializer < ApplicationSerializer
  object_as :protocol

  identifier :slug

  attributes(
    :title,
    :description,
  )
end
