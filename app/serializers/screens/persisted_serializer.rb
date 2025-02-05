class Screens::PersistedSerializer < ScreenSerializer
  include Persisted

  attributes(
    :id,
    :slug,
  )
end
