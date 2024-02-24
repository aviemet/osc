# Development data

if Rails.env == "development"

  if User.count == 0
    user = User.create!({
      email: "aviemet@gmail.com",
      password: "Complex1!",
      confirmed_at: Date.new,
    })

    user.add_role :super_admin
  end

  if Screen.count == 0
    Screen.create({
      title: "Main",
      order: 1,
    })
  end
end
