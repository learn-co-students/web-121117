class ArtistsController < ApplicationController
  #INDEX -> SHOW ALL ARTISTS
  # GET /artists
  # SELECT * FROM artists;
  # Artist.all
  # artists/index

  get "/artists" do
    @artists = Artist.all
    erb :"artists/index"
  end


  # NEW -> SHOW A FORM
  # GET /artists/new
  # NO SQL!!!!!!
  # NO AR

  get "/artists/new" do
    erb :"artists/new"
  end


  # CREATE -> CREATES AN ARTIST
  # POST /artists
  # INSERT INTO artists (name, hometown) VALUES (?, ?)
  # Artist.create(name: params[:name], hometown: params[:hometown])
  #

  # ALWAYS THROW A PRY INTO THE RECEIVING ROUTE
  post "/artists" do
    @artist = Artist.create(params[:artist])
    redirect "/artists/#{@artist.id}"
  end



  # EDIT -> SHOWS AN EDIT FORM
  # GET /artists/:id/edit
  # NO SQL!!!! -> NOT TRUE
  # SELECT * FROM artists WHERE id = params[:id]
  # NO AR!!!! -> NOT TRUE
  # Artist.find(params[:id])




  # UPDATE -> RECEIVES UPDATE INFO
  # PATCH /artists/:id
  # SQL -> UPDATE artists SET name = ?, hometown = ? WHERE id = params[:id]
  # @artist.update(params[:artist])


  patch "/artists/:id" do
    @artist = Artist.find(params[:id])
    @artist.update(params[:artist])
    redirect "/artists/#{@artist.id}"
  end

  # SHOW -> SHOW 1 ARTIST
  # GET /artists/:id
  # SELECT * FROM artists WHERE id = ?
  # Artist.find_by(id: params[:id]) or Artist.find(params[:id])

  get "/artists/:id" do
    @artist = Artist.find(params[:id])
   erb :"artists/show"
  end

  get "/artists/:id/edit" do
    @artist = Artist.find(params[:id])
    erb :"artists/edit"
  end

  delete "/artists/:id" do
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect "/artists"
  end





end
