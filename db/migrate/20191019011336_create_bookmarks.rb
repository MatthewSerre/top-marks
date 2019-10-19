class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.integer :folder_id
      t.string :name
      t.string :url
      t.string :notes

      t.timestamps
    end
  end
end
