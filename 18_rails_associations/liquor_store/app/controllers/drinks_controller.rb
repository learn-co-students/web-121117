class DrinksController < ApplicationController
  before_action :find_drink_by_id, only: [:show, :edit, :update, :destroy]
  before_action :set_user_options, only: [:new, :edit]

  def index
    @drinks = Drink.all
  end

  def show
  end

  def new
    @drink = Drink.new
  end

  def create
    @drink = Drink.create(drink_params)


    redirect_to @drink
  end

  def edit
  end

  def update
    @drink.update(drink_params)

    redirect_to @drink
  end

  def destroy
    @drink.destroy

    redirect_to drinks_path
  end

  private
  def drink_params
    params.require(:drink).permit(:name, :user_id)
  end

  def set_user_options
    @user_options = User.all.map { |u| [u.name, u.id ] }
  end

  def find_drink_by_id
    @drink = Drink.find(params[:id])
  end
end
