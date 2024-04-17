# == Schema Information
#
# Table name: protocols_commands
#
#  id               :bigint           not null, primary key
#  delay            :integer
#  order            :integer          not null
#  value            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  command_id       :bigint           not null
#  command_value_id :bigint
#  protocol_id      :bigint           not null
#
# Indexes
#
#  index_protocols_commands_on_command_id        (command_id)
#  index_protocols_commands_on_command_value_id  (command_value_id)
#  index_protocols_commands_on_protocol_id       (protocol_id)
#
# Foreign Keys
#
#  fk_rails_...  (command_id => commands.id)
#  fk_rails_...  (command_value_id => command_values.id)
#  fk_rails_...  (protocol_id => protocols.id)
#
require 'rails_helper'

RSpec.describe ProtocolsCommand, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
