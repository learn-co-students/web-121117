class BooksController < ApplicationController

  get "/books" do
    @books = Book.all
    erb :'books/index'
  end

  post "/books" do
    @book = Book.create(title: params[:title], author_id: params[:author_id])
    redirect "/books/#{@book.id}"
  end

  get "/books/new" do
    @authors = Author.all
    erb :'books/new'
  end

  get "/books/:id" do
    @book = Book.find(params[:id])
    erb :'books/show'
  end

  get "/books/:id/edit" do
    @book = Book.find(params[:id])
    @authors = Author.all
    erb :'books/edit'
  end

  patch "/books/:id" do
    @book = Book.find(params[:id])
    @book.update(title: params[:title], author_id: params[:author_id])

    redirect "/books/#{@book.id}"
  end

  delete "/books/:id" do
    @book = Book.find(params[:id])
    @book.destroy

    redirect "/books"
  end
end
