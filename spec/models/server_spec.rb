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
require 'rails_helper'

RSpec.describe Server, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
