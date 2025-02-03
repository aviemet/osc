class Users::EditSerializer < UserSerializer
  attributes(
    :id,
  )

  self.timestamps

  has_many :roles, serializer: RoleSerializer
end
