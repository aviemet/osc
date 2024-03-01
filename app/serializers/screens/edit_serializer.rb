class Screens::EditSerializer < ScreenSerializer
  attributes(
    :slug,
    :id,
    :updated_at,
    :created_at,
  )

  has_many :controls, serializer: Controls::EditSerializer
end
