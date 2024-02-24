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
require 'rails_helper'

RSpec.describe Screen, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
