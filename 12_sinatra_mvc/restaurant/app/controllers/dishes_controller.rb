class DishesController < ApplicationController

  get "/dishes" do
    @dishes = Dish.all
    erb :'dishes/index'
  end

  get "/dishes/:id" do
    @dish = Dish.find_by_id(params[:id])
    erb :'dishes/dish'
  end

  post "/dishes" do
    name = params[:name]
    rating = params[:rating]
    dish = Dish.create(name: name, rating: rating)
    redirect "/dishes/#{dish.id}"
  end

  patch "/dishes/:id" do
    name = params[:name]
    rating = params[:rating]
    dish = Dish.find_by_id(params[:id])
    dish.update(name: name, rating: rating)
    redirect "/dishes/#{params[:id]}"
  end

end
