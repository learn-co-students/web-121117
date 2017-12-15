#bin/run.rb

require "pry"
require_relative "student"
require_relative "class"
require_relative "enrollment"

rishi = Student.new("rishi")
mo = Student.new("mo")
john = Student.new("john")
nemanja = Student.new("nemanja")

c = Course.new("Learning to Teach 101")
c2 = Course.new("Pottery")
c3 = Course.new("Music")
c4 = Course.new("Advanced Advanced Chemistry")

Enrollment.new(rishi, c)
Enrollment.new(rishi, c3)
Enrollment.new(rishi, c4)
Enrollment.new(mo, c3)
Enrollment.new(john, c2)
Enrollment.new(john, c3)
Enrollment.new(nemanja, c2)
Enrollment.new(nemanja, c3)



# User
# @people_i_follow = [u2, u3, u4]
# Follow
# @user_following
# @user_followed
# Follow(u1, u2)
# Follow(u2, u1)
# Follow(u1, u3)
# Follow(u1, u4)

#delete u4


binding.pry
