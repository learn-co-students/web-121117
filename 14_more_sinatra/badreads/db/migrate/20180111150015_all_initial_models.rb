class AllInitialModels < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
    end

    create_table :books do |t|
      t.string :title
      t.belongs_to :author
    end

    create_table :genres do |t|
      t.string :name
    end

    create_table :bookgenres do |t|
      t.belongs_to :book
      t.belongs_to :genre
    end
  end
end
