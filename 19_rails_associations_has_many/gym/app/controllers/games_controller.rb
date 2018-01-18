class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]
  before_action :set_players, only: [:new, :edit]

  def index
    @games = Game.all
  end

  def show
    @players = @game.players
  end

  def new
    @game = Game.new
  end

  def create
    byebug
    @game = Game.create(game_params)
    if @game.valid?
      redirect_to @game
    else
      flash[:error] = @game.errors.full_messages
      redirect_to new_game_path
    end
  end

  def edit
  end

  def update
    @game.update(game_params)
    if @game.valid?
      redirect_to @game
    else
      flash[:error] = @game.errors.full_messages
      redirect_to edit_game_path(@game)
    end
  end

  def destroy
    @game.destroy
    redirect_to games_path
  end

  private

  def game_params
    params.require(:game).permit(:name, player_ids: [])
  end

  def set_game
    @game = Game.find(params[:id])
  end

  def set_players
    @players = Player.all
  end
end
