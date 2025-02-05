class Controls::PersistedSerializer < ControlSerializer
  include Persisted

  attributes(
    :id,
  )
end
