class FolderSerializer < ActiveModel::Serializer
  has_many :bookmarks
  attributes :id, :name, :description
end
