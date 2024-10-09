class Screens::EditSerializer < ScreenSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps

  has_many :controls, serializer: Controls::EditSerializer
end
