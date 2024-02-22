require 'net/smtp'

class Api::SmtpsController < Api::ApiController
  # @route POST /api/smtp/test (api_smtp_test)
  def test
    render json: test_smtp_auth(Smtp.new(smtp_params)), status: :ok
  end

  private

  def test_smtp_auth(smtp)
    Net::SMTP.start(smtp.host, smtp.port, smtp.domain, smtp.username, smtp.password) do |_smtp|
      # Authentication successful
      { success: true, message: 'Authentication successful' }
    end
  rescue Net::SMTPAuthenticationError => e
    # Authentication failed
    { success: false, message: "Authentication failed: #{e.message}" }
  rescue StandardError => e
    # Other errors
    { success: false, message: "An error occurred: #{e.message}" }
  end

  def smtp_params
    params.require(:smtp).permit(:name, :host, :domain, :port, :security, :username, :password, :address, :notes)
  end
end
