class Servers::EditSerializer < ServerSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps
end
