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
FactoryBot.define do
  factory :remote_api do
    title { "MyString" }
    root_url { "MyString" }
    description { "MyText" }
    auth_token { "MyString" }
  end
end
