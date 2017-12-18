require_relative "vehicle"

class Motorbike < Vehicle
  def initialize(top_speed, mpg)
    super(2, top_speed, mpg)
  end
end
