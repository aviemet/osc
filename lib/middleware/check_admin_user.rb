class CheckAdminUser
  def initialize(app)
    @app = app
  end

  def call(env)
    # Check if an admin user exists
    if User.with_role(:admin).empty?
      request = Rack::Request.new(env)

      # If the request path is not the setup path, redirect to the setup page
      unless request.path == '/users/register' || (request.path == '/users' && request.post?)
        return [302, { 'Location' => '/users/register', 'Content-Type' => 'text/html' }, []]
      end
    end

    # If an admin exists or the request path is '/users/register', continue with the request
    @app.call(env)
  end
end
