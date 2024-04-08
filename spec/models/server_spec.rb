# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  description :text
#  hostname    :string
#  port        :integer
#  slug        :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_servers_on_slug  (slug) UNIQUE
#
require 'rails_helper'

RSpec.describe Server, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
