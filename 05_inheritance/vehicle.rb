class Vehicle

  attr_accessor :num_wheels, :top_speed, :mpg

  def initialize(num_wheels, top_speed)
    @num_wheels = num_wheels
    @top_speed = top_speed
  end
end
