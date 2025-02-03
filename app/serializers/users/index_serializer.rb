class Users::IndexSerializer < UserSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
    user_preferences: { type: "IUserPreferences" },
  )

  self.timestamps

  has_many :roles, serializer: RoleSerializer
end
