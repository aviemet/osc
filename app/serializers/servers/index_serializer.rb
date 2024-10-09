class Servers::IndexSerializer < ServerSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps
end
