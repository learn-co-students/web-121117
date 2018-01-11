class GenresController < ApplicationController

  get "/genres" do
    @genres = Genre.all
    erb :'genres/index'
  end

  post "/genres" do
    @genre = Genre.create(name: params[:name])
    @genre.book_ids = params[:book_ids]
    redirect "/genres/#{@genre.id}"
  end

  get "/genres/new" do
    @books = Book.all
    erb :'genres/new'
  end

  get "/genres/:id" do
    @genre = Genre.find_by_id(params[:id])
    erb :'genres/show'
  end

  get "/genres/:id/edit" do
    @genre = Genre.find_by_id(params[:id])
    @books = Book.all
    erb :'genres/edit'
  end

  patch "/genres/:id" do
    @genre = Genre.find_by_id(params[:id])
    @genre.update(name: params[:name])
    binding.pry
    @genre.book_ids = params[:book_ids]

    redirect "/genres/#{@genre.id}"
  end

  delete "/genres/:id" do
    @genre = Genre.find(params[:id])
    @genre.destroy

    redirect "/genres"
  end
end
