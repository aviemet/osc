class Servers::ShowSerializer < ServerSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps
end
