class ArtistsController < ApplicationController
  get "/artists" do
    @artists = Artist.all
    erb :"artists/index"
  end

  get "/artists/new" do
    erb :"artists/new"
  end

  post "/artists" do
    @artist = Artist.create(name: params[:name])
    redirect "/artists/#{@artist.id}"
  end

  patch "/artists/:id" do
    @artist = Artist.find(params[:id])
    @artist.update(name: params[:name])
    redirect "/artists/#{@artist.id}"
  end

  get "/artists/:id" do
    @artist = Artist.find(params[:id])
    erb :"artists/show"
  end

  get "/artists/:id/edit" do
    @artist = Artist.find(params[:id])
    erb :"artists/edit"
  end
end
