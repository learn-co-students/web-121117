class CreatePastries < ActiveRecord::Migration[5.1]
  def change
    create_table :pastries do |t|
      t.string :name
      t.string :pastry_type
      t.integer :rating

      t.timestamps
    end
  end
end
