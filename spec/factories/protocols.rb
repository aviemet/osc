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
FactoryBot.define do
  factory :protocol do
    title { Faker::Verb.base + " " + Faker::Appliance.equipment }
  end
end
