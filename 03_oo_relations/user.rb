require_relative "tweet"

class User
  attr_reader :uname

  def initialize(uname)
    @uname = uname
  end

  def post_tweet(message)
    t = Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.username == @uname
    end
  end

end
