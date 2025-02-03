class Screens::ShowSerializer < ScreenSerializer
  attributes(
    :slug,
    :id,
  )

  self.timestamps

  has_many :controls, serializer: Controls::ShowSerializer
end
