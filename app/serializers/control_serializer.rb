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
class ControlSerializer < ApplicationSerializer
  object_as :control

  attributes(
    :title,
    :order,
    :min_value,
    :max_value,
    :value,
    :color,
    :screen_id,
    :protocol_id,
    :command_id,
    control_type: { type: :string },
  )

  belongs_to :protocol, serializer: ProtocolSerializer
  belongs_to :command, serializer: CommandSerializer
end
