class AddDish < ActiveRecord::Migration
  def change
    create_table :dishes do |t|
      t.string :name
      t.integer :rating
    end
  end
end
