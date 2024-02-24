class Users::ShowSerializer < UserSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
    user_preferences: { type: "IUserPreferences" },
  )

  has_many :roles, serializer: RoleSerializer
end
