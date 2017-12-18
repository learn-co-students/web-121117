require_relative "vehicle"
require_relative "gas"

class Car < Vehicle
  def initialize(top_speed)
    super(4, top_speed)
  end
end

class Corvette < Car
  include GasVehicle

  def initialize()
    super(500)
    @mpg = 1000
  end
end

class Tesla < Car
  def initialize()
    super(4, 1000)
  end
end
