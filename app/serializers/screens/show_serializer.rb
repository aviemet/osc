class Screens::ShowSerializer < Screens::PersistedSerializer
  has_many :controls, serializer: Controls::ShowSerializer
end
