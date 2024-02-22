class Api::CurrenciesController < Api::ApiController
  # GET api/currencies
  # @route GET /api/currencies (api_currencies)
  def index
    render json: currencies
  end
end
