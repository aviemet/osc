class Screens::IndexSerializer < ScreenSerializer
  attributes(
    :slug,
    :id,
  )

  self.timestamps
end
