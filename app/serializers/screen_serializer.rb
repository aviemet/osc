# == Schema Information
#
# Table name: screens
#
#  id         :bigint           not null, primary key
#  order      :integer          not null
#  slug       :string           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_screens_on_slug  (slug) UNIQUE
#
class ScreenSerializer < ApplicationSerializer
  object_as :screen

  identifier :slug

  attributes(
    :title,
    :order,
  )
end
