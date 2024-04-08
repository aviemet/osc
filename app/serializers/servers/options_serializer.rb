class Servers::OptionsSerializer < ApplicationSerializer
  object_as :server

  attributes(
    :id,
    :slug,
    :title,
  )
end
