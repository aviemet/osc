class RemoteApis::ShowSerializer < RemoteApiSerializer
  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
