class Commands::EditSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
    :updated_at,
    :created_at,
  )
end
