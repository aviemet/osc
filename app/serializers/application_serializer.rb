class ApplicationSerializer < Oj::Serializer
  include TypesFromSerializers::DSL

  identifier

  def currency_for(obj)
    obj.cost&.amount&.to_f
  end

  def self.timestamps
    attributes(
      :updated_at,
      :created_at,
    )
  end
end
