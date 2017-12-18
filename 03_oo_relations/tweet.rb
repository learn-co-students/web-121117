class Tweet
  attr_reader :message, :user

  @@all = []



  # THIS IS A CLASS METHOD
  # WHY DONT I SEE THIS EVER
  # TECHNICALLY IT EXISTS ON BASIC OBJECT
  def self.new(message, user)
    # WHAT IS SELF HERE ???  TWEET






    some_obj = Object.new
    some_obj.initialize(message, user) # => some_obj
  end


  Tweet.new(message, user)


  # THIS IS AN INSTANCE METHOD
  def initialize(message, user)
    # INSTANCE of THING
    # self ?????
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    @user.username
  end

end
