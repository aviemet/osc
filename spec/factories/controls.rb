# == Schema Information
#
# Table name: controls
#
#  id           :bigint           not null, primary key
#  color        :string
#  control_type :integer          not null
#  height       :integer
#  max_value    :decimal(, )
#  min_value    :decimal(, )
#  order        :integer          not null
#  title        :string           not null
#  value        :decimal(, )
#  width        :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  command_id   :bigint
#  protocol_id  :bigint
#  screen_id    :bigint           not null
#
# Indexes
#
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
    title { Faker::Company.buzzword }
    control_type { :button }
    order { nil } # Will be set by callback
    screen

    trait :with_protocol do
      protocol
    end

    trait :with_command do
      command
    end
  end
end
