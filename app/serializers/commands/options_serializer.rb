class Commands::OptionsSerializer < ApplicationSerializer
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
end
