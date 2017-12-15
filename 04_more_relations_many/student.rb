require_relative "enrollment"

class Student

  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def classes
    c = []
    Enrollment.all.each do |e|
      if e.student.name == @name
        c << e.klass
      end
    end
    c
  end

end

#Enrollment.all.select do |enrollment|
#  enrollment.student.name == @name
#end
