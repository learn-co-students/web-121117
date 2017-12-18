#bin/run.rb

require "pry"
require_relative "cars"
require_relative "truck"
require_relative "motorbike"
require_relative "vehicle"

#car = Car.new(300)

corvette = Corvette.new()
#truck = Truck.new(2, 10, 80)
# => bike = Motorbike.new(100, 80)

binding.pry
