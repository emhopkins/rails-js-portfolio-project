class BuildingSerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :apartments
end
