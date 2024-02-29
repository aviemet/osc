# Development data

if Rails.env.development?

  if User.count == 0
    user = User.create!({
      email: "aviemet@gmail.com",
      password: "Complex1!",
      confirmed_at: Date.new,
    })

    user.add_role :super_admin

    ap "Created User"
  end

  if Screen.count == 0
    Screen.create({
      title: "Main",
      order: 1,
    })

    ap "Created Screen"
  end

  if Server.count == 0
    Server.create({
      title: "Resolume",
      hostname: "ws://localhost",
      port: 8081,
      description: "Resolume server",
    })

    ap "Created Server"
  end

  if Command.count == 0
    server = Server.first

    {
      # STOP
      "All Stop" => "/composition/disconnectall",

      # CEILING
      "Ceiling Day Start" => "/composition/layers/4/clips/1/connect",
      "Ceiling Day Stop" => "/composition/layers/4/clear",

      "Ceiling Twilight Start" => "/composition/layers/3/clips/1/connect",
      "Ceiling Twilight Stop" => "/composition/layers/3/clear",

      "Ceiling Night Start" => "/composition/layers/2/clips/1/connect",
      "Ceiling Night Stop" => "/composition/layers/2/clear",

      # WALL
      "Wall Day Start" => "/composition/layers/8/clips/1/connect",
      "Wall Day Stop" => "/composition/layers/8/clear",

      "Wall Twilight Start" => "/composition/layers/7/clips/1/connect",
      "Wall Twilight Stop" => "/composition/layers/7/clear",

      "Wall Night Stop" => "/composition/layers/6/clear",
      "Wall Night Start" => "/composition/layers/6/clips/1/connect",
    }.each do |key, value|
      ap({ key:, value: })
      Command.create({
        title: key,
        endpoint: value,
        server: server
      })
    end

    ap "Created #{Command.count} Command(s)"
  end
end
