class Users::ShowSerializer < UserSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
    table_preferences: { type: "IUserTablePreferences" },
    user_preferences: { type: "IUserPreferences" },
  )

  has_one :person, serializer: PersonSerializer
  has_many :roles, serializer: RoleSerializer
  has_many :circles, serializer: Circles::ShareSerializer
end
