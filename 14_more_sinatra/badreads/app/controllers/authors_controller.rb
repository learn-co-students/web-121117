class AuthorsController < ApplicationController

  get "/authors" do
    @authors = Author.all
    erb :'authors/index'
  end

  post "/authors" do
    @author = Author.create(name: params[:name])
    #all that other stuff that we did below also happens but we don't have to write it out again
    redirect "/authors/#{@author.id}"
  end

  get "/authors/new" do
    erb :'authors/new'
  end

  get "/authors/:id" do
    @author = Author.find(params[:id])
    # abunch more stuff to get the right author and also whatever
    erb :'authors/show'
  end

  get "/authors/:id/edit" do
    @author = Author.find(params[:id])
    erb :'authors/edit'
  end

  patch "/authors/:id" do
    # Author.update(id: params[:id], name: params[:name])
    @author = Author.find(params[:id])
    @author.update(name: params[:name])

    redirect "/authors/#{@author.id}"
  end

  delete "/authors/:id" do
    @author = Author.find(params[:id])
    @author.destroy

    redirect "/authors"
  end
end
