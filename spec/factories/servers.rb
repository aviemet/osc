# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  description :text
#  hostname    :string           not null
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
FactoryBot.define do
  factory :server do
    title { "Test Server" }
    hostname { "localhost" }
    port { 9091 }
  end
end
