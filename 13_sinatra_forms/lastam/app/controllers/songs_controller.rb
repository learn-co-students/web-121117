class SongsController < ApplicationController

  # GET /songs
  # Index Action

  get "/songs" do
    # Get all songs
    # Show some view
    @songs = Song.all
    erb :"songs/index"
  end

  # NEW
  get "/songs/new" do
    erb :"songs/new"
  end

  get "/songs/:id/edit" do

  end


  patch "/songs/:id" do

  end

  # GET /songs/:id
  get "/songs/:id" do
    @song = "All I want for Christmas"
    erb :"songs/show"
  end



  post "/songs" do
    binding.pry
  end



end
