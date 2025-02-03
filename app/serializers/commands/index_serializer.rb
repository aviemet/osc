class Commands::IndexSerializer < CommandSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps
end
