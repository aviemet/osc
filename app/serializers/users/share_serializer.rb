class Users::ShareSerializer < ApplicationSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
    user_preferences: { type: "IUserPreferences" },
  )

  has_many :roles, serializer: RoleSerializer
end
