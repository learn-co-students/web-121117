require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end


  get "/songs" do
    erb :song
  end

  post "/songs" do
    binding.pry
  end


end
