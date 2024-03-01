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
require 'rails_helper'

RSpec.describe Protocol, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
