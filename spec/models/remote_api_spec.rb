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
require 'rails_helper'

RSpec.describe RemoteApi, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
