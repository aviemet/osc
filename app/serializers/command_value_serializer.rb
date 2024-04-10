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
class CommandValueSerializer < ApplicationSerializer
  object_as :command_value

  attributes(
    :label,
    :value,
    :command_id,
  )
end
