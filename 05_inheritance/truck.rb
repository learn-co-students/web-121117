require_relative "vehicle"

class Truck < Vehicle

  attr_accessor :capacity

  def initialize(capacity, num_wheels, top_speed, mpg)
    super(num_wheels, top_speed, mpg)
    @capacity = capacity
  end
end

class TeslaTruck < Vehicle
  def initialize()
    super(100, 10, 500, ???)
  end
end 
