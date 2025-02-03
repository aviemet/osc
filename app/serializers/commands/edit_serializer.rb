class Commands::EditSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps
end
