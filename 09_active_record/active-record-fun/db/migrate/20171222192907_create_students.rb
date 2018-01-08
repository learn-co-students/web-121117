class CreateStudents < ActiveRecord::Migration[5.0]
  # CREATE TABLE students (id PRIMARY KEY INTEGER, name TEXT);
  def change
    create_table :students do |t|
      t.string :name
    end
  end
end
