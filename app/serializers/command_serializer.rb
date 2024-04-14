# == Schema Information
#
# Table name: commands
#
#  id                 :bigint           not null, primary key
#  address            :string
#  allow_custom_value :boolean          default(FALSE), not null
#  description        :text
#  payload_type       :integer
#  slug               :string           not null
#  title              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  server_id          :bigint           not null
#
# Indexes
#
#  index_commands_on_server_id  (server_id)
#  index_commands_on_slug       (slug) UNIQUE
#
# Foreign Keys
#
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
    :allow_custom_value,
    :server_id,
  )

  has_many :command_values, serializer: CommandValueSerializer
end
