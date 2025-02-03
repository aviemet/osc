class Users::ShowSerializer < UserSerializer
  attributes(
    :id,
    user_preferences: { type: "IUserPreferences" },
  )

  self.timestamps

  has_many :roles, serializer: RoleSerializer
end
