class RemoteApis::IndexSerializer < RemoteApiSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
