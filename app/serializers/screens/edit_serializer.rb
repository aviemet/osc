class Screens::EditSerializer < ScreenSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )

  has_many :controls, serializer: Controls::EditSerializer
end
