# == Schema Information
#
# Table name: commands
#
#  id                 :bigint           not null, primary key
#  address            :string
#  description        :text
#  payload            :string
#  payload_type       :integer
#  slug               :string           not null
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
#  index_commands_on_slug                (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (control_payload_id => controls.id)
#  fk_rails_...  (server_id => servers.id)
#
class CommandSerializer < ApplicationSerializer
  object_as :command

  identifier :slug

  attributes(
    :title,
    :description,
    :address,
    :payload_type,
    :payload,
    :server_id,
  )

  has_many :command_values, serializer: CommandValueSerializer
end
