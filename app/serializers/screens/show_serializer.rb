class Screens::ShowSerializer < ScreenSerializer
  attributes(
    :slug,
    :id,
    :updated_at,
    :created_at,
  )

  has_many :controls, serializer: Controls::ShowSerializer
end
