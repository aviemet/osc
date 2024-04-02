# == Schema Information
#
# Table name: controls
#
#  id           :bigint           not null, primary key
#  control_type :integer          not null
#  max_value    :decimal(, )
#  min_value    :decimal(, )
#  order        :integer          not null
#  title        :string           not null
#  value        :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  protocol_id  :bigint           not null
#  screen_id    :bigint           not null
#
# Indexes
#
#  index_controls_on_protocol_id  (protocol_id)
#  index_controls_on_screen_id    (screen_id)
#
# Foreign Keys
#
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
    :screen_id,
    :protocol_id,
    control_type: { type: :string },
  )

  belongs_to :protocol, serializer: ProtocolSerializer
end
