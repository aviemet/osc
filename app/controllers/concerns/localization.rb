require "active_support/concern"

module Localization
  extend ActiveSupport::Concern

  included do
    before_action :set_locale

    def currencies
      Monetize::Parser::CURRENCY_SYMBOLS.map { |sym, abbr| { symbol: sym, code: abbr } }
    end
  end

  private

  def set_locale
    locale = params[:locale]

    return nil if locale.blank?

    locale = locale.to_s.strip.to_sym
    I18n.locale = I18n.available_locales.include?(locale) ? locale : I18n.default_locale
  end
end

def set_locale
  I18n.locale = extract_locale || I18n.default_locale
end

def extract_locale
  parsed_locale = params[:locale]
  return nil unless parsed_locale

  parsed_locale = parsed_locale.to_s.strip.to_sym
  I18n.available_locales.include?(parsed_locale) ? parsed_locale : nil
end
