class Course
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def students
    st = []
    Enrollment.all.each do |e|
      if e.klass.name == @name
        st << e.student
      end
    end
    st
  end
end


    # Enrollment.all.map do |e|
    #   if e.klass == @name
    #      e.student
    #   end
    # end.compact

    #relevent_e = Enrollment.all.select do |enrollment|
    #  enrollment.klass.name == @name
    #end
    #relevent_e.map do |enrollment|
    #  enrollment.student
    #end
