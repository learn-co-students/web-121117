class RenameStudentTeacherToClass < ActiveRecord::Migration[5.0]
  def change
    rename_table :student_teachers, :classes
  end
end
