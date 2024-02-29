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
FactoryBot.define do
  factory :server do
    title { "MyString" }
    hostname { "MyString" }
    port { 1 }
    description { "MyText" }
  end
end
