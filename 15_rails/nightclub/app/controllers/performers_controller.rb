class PerformersController < ApplicationController

  def index
    @performers = Performer.all
  end

  def show #/performers/:id
    @performer = Performer.find(params[:id])
  end

  def new
    @performer = Performer.new
  end

  def create
    @performer = Performer.create(name: params[:performer][:name])
    redirect_to @performer
  end

  def edit #/performers/:id
    @performer = Performer.find(params[:id])
  end

  def update
    @performer = Performer.find(params[:id])
    @performer.update(name: params[:performer][:name])

    redirect_to @performer
  end

  # def delete
  #   byebug
  #   @performer = Performer.find(params[:id])
  #   @performer.destroy
  #
  #   redirect_to performers_path
  # end

  def destroy
    @performer = Performer.find(params[:id])
    @performer.destroy

    redirect_to performers_path
  end
end
