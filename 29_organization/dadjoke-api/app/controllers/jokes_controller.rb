class JokesController < ApplicationController
  before_action :set_joke, only: [:show]
  def index
    @jokes = Joke.all
    render json: @jokes
  end

  def show
    @joke = Joke.find(params[:id])
    render json: @joke
  end

  def create
    @joke = Joke.create(joke: joke_params)
    @joke.save
    render json: @joke, status: 201
  end

  private
  def set_joke
    @task = Joke.find(params[:id])
  end

  def joke_params
    params.require(:joke)
  end
end
