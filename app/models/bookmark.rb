class Bookmark < ApplicationRecord
    belongs_to :folder
    validates :name, presence: true
    validates :url, presence: true
end
