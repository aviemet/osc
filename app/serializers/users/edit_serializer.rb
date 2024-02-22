class Users::EditSerializer < UserSerializer

  attributes(
    :id,
    :updated_at,
    :created_at,
  )

  has_one :person, serializer: PersonSerializer
  has_many :roles, serializer: RoleSerializer
  has_many :circles, serializer: Circles::ShareSerializer
end
