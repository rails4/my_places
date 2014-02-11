class Airport
  include Mongoid::Document
  field :type, type: String
  field :geometry, type: Hash
  field :properties, type: Hash
end
