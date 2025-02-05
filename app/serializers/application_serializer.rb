class ApplicationSerializer < Oj::Serializer
  include TypesFromSerializers::DSL

  identifier

  def self.currency_for(field)
    type "Money"
    define_method(field) do
      money = @object.send(field)

      return nil if money.nil?

      {
        amount: money.to_f,
        cents: money.cents,
        currency_iso: money.currency.iso_code,
      }
    end
  end

  def self.timestamps
    attributes(
      updated_at: { optional: true },
      created_at: { optional: true },
    )
  end
end
