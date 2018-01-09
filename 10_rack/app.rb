require 'pry'
require_relative './song'
class Application
  def call(env)


    req = Rack::Request.new(env)
    resp = Rack::Response.new

    if req.path.match(/songs/)
      song_list_items = Song.all.map { |song| "<li>#{song}</li>" }.join

      resp.write("
          <h1>Songs List</h1>
          <ul>
            #{song_list_items}
          </ul>
        ")


    elsif req.path.match(/artists/)
      resp.write("<h1>Artists List</h1>")
    else
      resp.write("<h1>Not Found</h1>")
    end

    resp.finish
  end
end
