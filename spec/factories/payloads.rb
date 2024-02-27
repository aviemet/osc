# == Schema Information
#
# Table name: payloads
#
#  id         :bigint           not null, primary key
#  endpoint   :string           not null
#  payload    :string
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :payload do
    title { "MyString" }
    endpoint { "MyString" }
    payload { "MyString" }
  end
end
