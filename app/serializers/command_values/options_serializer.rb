class CommandValues::OptionsSerializer < ApplicationSerializer
  object_as :command_value

  attributes(
    :id,
    :label,
    :value,
  )
end
