class Users::EditSerializer < UserSerializer

  attributes(
    :id,
    :updated_at,
    :created_at,
  )

  has_many :roles, serializer: RoleSerializer
end
