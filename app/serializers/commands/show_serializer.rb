class Commands::ShowSerializer < CommandSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
