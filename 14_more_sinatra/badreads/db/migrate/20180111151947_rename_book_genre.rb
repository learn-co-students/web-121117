class RenameBookGenre < ActiveRecord::Migration
  def change
    rename_table :bookgenres, :book_genres
  end
end
