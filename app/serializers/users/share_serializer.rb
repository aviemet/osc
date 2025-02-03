class Users::ShareSerializer < UserSerializer
  attributes(
    :id,
    user_preferences: { type: "IUserPreferences" },
    table_preferences: { type: "ITablePreferences" },
  )

  self.timestamps

  has_many :roles, serializer: RoleSerializer
end
