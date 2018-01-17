class PastriesController < ApplicationController
  def index
    @pastries = Pastry.all
  end

  def show
    @pastry = Pastry.find(params[:id])
  end

  def new
    @pastry = Pastry.new
  end

  def create
    @pastry = Pastry.create(pastry_params)
    if @pastry.valid?
      redirect_to @pastry
    else
      flash[:error] = @pastry.errors.full_messages
      redirect_to new_pastry_path
    end

  end

  def update
    @pastry = Pastry.find(params[:id])
    @pastry.update(pastry_params)

    redirect_to @pastry
  end

  def destroy
    @pastry = Pastry.find(params[:id])
    @pastry.destroy
    redirect_to pastries_path
  end

  def edit
    @pastry = Pastry.find_by(id: params[:id])
  end

  private

  def pastry_params
    params.require(:pastry).permit(:name, :pastry_type, :rating)
  end
end
