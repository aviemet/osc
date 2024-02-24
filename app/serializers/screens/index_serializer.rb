class Screens::IndexSerializer < ScreenSerializer
  attributes(
    :slug,
    :id,
    :updated_at,
    :created_at,
  )
end
