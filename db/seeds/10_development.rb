# Development data

if Rails.env.development?

  if User.count == 0
    user = User.create!({
      email: "aviemet@gmail.com",
      password: "Complex1!",
      confirmed_at: Date.new,
    })

    user.add_role :admin

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
      hostname: "localhost",
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
      Command.create({
        title: key,
        address: value,
        server: server,
        payload_type: 0,
        command_values: [
          CommandValue.new(value: 0),
          CommandValue.new(value: 1),
        ],
      })
    end

    ap "Created #{Command.count} Command(s)"
  end

  if Protocol.count == 0
    sunrise = Protocol.create({ title: "Sunrise" })
    sunrise.commands << Command.where({ slug: [
      "all-stop",
      "wall-day-start",
      "ceiling-day-start",
    ], } )

    twilight = Protocol.create({ title: "Twilight" })
    twilight.commands << Command.where({ slug: [
      "all-stop",
      "wall-twilight-start",
      "ceiling-twilight-start",
    ] } )

    sunset = Protocol.create({ title: "Sunset" })
    sunset.commands << Command.where({ slug: [
      "all-stop",
      "wall-night-start",
      "ceiling-night-start",
    ] } )

    ap "Created #{Protocol.count} Protocol(s)"
  end

  if Control.count == 0
    screen = Screen.first
    Control.create({
      title: "Sunrise",
      control_type: :button,
      protocol: Protocol.find_by({ slug: "sunrise" }),
      screen: screen,
    })

    Control.create({
      title: "Twilight",
      control_type: :button,
      protocol: Protocol.find_by({ slug: "twilight" }),
      screen: screen,
    })

    Control.create({
      title: "Sunset",
      control_type: :button,
      protocol: Protocol.find_by({ slug: "sunset" }),
      screen: screen,
    })

    ap "Created #{Control.count} Control(s)"
  end
end
