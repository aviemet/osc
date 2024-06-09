# == Schema Information
#
# Table name: controls
#
#  id           :bigint           not null, primary key
#  color        :string
#  control_type :integer          not null
#  max_value    :decimal(, )
#  min_value    :decimal(, )
#  order        :integer          not null
#  title        :string           not null
#  value        :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  command_id   :bigint
#  protocol_id  :bigint
#  screen_id    :bigint           not null
#
# Indexes
#
#  idx_order_screen               (order,screen_id) UNIQUE
#  index_controls_on_command_id   (command_id)
#  index_controls_on_protocol_id  (protocol_id)
#  index_controls_on_screen_id    (screen_id)
#
# Foreign Keys
#
#  fk_rails_...  (command_id => commands.id)
#  fk_rails_...  (protocol_id => protocols.id)
#  fk_rails_...  (screen_id => screens.id)
#
FactoryBot.define do
  factory :control do
    title { "MyString" }
    type { 1 }
    screen { nil }
    position { "" }
    min_value { "9.99" }
    max_value { "9.99" }
    value { "9.99" }
    protocol { nil }
  end
end
