class Users::FormDataSerializer < UserSerializer
  attributes

  has_many :circles, serializer: Circles::ShareSerializer
end
