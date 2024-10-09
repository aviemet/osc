class Servers::ReferenceSerializer < ServerSerializer
  attributes(
    :id,
    :slug,
  )

  self.timestamps
end
