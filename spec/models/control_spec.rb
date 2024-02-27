# == Schema Information
#
# Table name: controls
#
#  id          :bigint           not null, primary key
#  max_value   :decimal(, )
#  min_value   :decimal(, )
#  position    :point            not null
#  title       :string           not null
#  type        :integer          not null
#  value       :decimal(, )
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  protocol_id :bigint           not null
#  screen_id   :bigint           not null
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
require 'rails_helper'

RSpec.describe Control, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
