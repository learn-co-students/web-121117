class AddStudentToParent < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :parent_id, :integer
  end
end
