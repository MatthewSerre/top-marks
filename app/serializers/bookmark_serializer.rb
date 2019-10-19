class BookmarkSerializer < ActiveModel::Serializer
  belongs_to :folder
  attributes :id, :folder_id, :name, :url, :notes
end
