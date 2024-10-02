class RemoteApis::EditSerializer < RemoteApiSerializer

  attributes(
    :id,
    :updated_at,
    :created_at,
  )
end
