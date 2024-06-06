class Users::ShareSerializer < UserSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
    user_preferences: { type: "IUserPreferences" },
    table_preferences: { type: "ITablePreferences" },
  )

  has_many :roles, serializer: RoleSerializer
end
