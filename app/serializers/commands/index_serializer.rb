class Commands::IndexSerializer < CommandSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
