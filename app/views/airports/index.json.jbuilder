json.array!(@airports) do |airport|
  json.extract! airport, :id, :type, :geometry, :properties
  json.url airport_url(airport, format: :json)
end
