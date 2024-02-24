class Screens::OptionsSerializer < ApplicationSerializer
  object_as :screen

  identifier :slug

  attributes(
    :slug,
    :title,
    :order,
  )
end
