class Screens::EditSerializer < Screens::PersistedSerializer
  has_many :controls, serializer: Controls::EditSerializer
end
