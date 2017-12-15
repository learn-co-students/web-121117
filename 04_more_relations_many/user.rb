require_relative "tweet"

class User
  attr_reader :uname

  def initialize(uname)
    @uname = uname
  end

  def post_message(message)
    t = Post.new(message, self)
  end

  def posts
    Post.all.select do |tweet|
      tweet.username == @uname
    end
  end

end
