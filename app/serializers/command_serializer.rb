# == Schema Information
#
# Table name: commands
#
#  id                 :bigint           not null, primary key
#  description        :text
#  endpoint           :string
#  payload            :string
#  payload_type       :integer
#  title              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  control_payload_id :bigint
#  server_id          :bigint           not null
#
# Indexes
#
#  index_commands_on_control_payload_id  (control_payload_id)
#  index_commands_on_server_id           (server_id)
#
# Foreign Keys
#
#  fk_rails_...  (control_payload_id => controls.id)
#  fk_rails_...  (server_id => servers.id)
#
class CommandSerializer < ApplicationSerializer
  object_as :command

  attributes(
    :title,
    :description,
    :endpoint,
    :payload,
  )
end
