# == Schema Information
#
# Table name: command_values
#
#  id         :bigint           not null, primary key
#  label      :string
#  value      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  command_id :bigint           not null
#
# Indexes
#
#  index_command_values_on_command_id  (command_id)
#
# Foreign Keys
#
#  fk_rails_...  (command_id => commands.id)
#
FactoryBot.define do
  factory :command_value do
    label { "MyString" }
    value { "MyString" }
    command { nil }
  end
end
