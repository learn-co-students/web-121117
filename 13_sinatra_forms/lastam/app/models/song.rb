class Song


  attr_accessor :name, :rating

  def initialize(name, rating = nil)
    @name = name
    @rating = rating
  end

  def self.create(name, rating = nil)
    song = self.new(name, rating)
    song.save
  end

  def self.find(name)
    self.all.find { |song| song.name == name }
  end

  def save
    @@all << self
  end

  @@all = [Song.new("All I want for Xmas", 1)]
  def self.all
    @@all
  end


end
