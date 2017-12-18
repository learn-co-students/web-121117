  class Enrollment
    attr_accessor :student, :klass

    @@all = []

    def initialize(student, klass)
      @student = student
      @klass = klass

      @@all << self
    end

    def self.all
      @@all
    end

  end
