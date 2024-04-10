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
require 'rails_helper'

RSpec.describe CommandValue, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
