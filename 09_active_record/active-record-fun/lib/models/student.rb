class Student < ActiveRecord::Base
  belongs_to :parent

  has_many :classes
  has_many :teachers, through: :classes
end
