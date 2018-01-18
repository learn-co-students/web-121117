class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :edit, :update, :destroy]
  before_action :set_games, only: [:new, :edit]

  def index
    @players = Player.all
  end

  def show
    @games = @player.games
  end

  def new
    @player = Player.new
  end

  def create
    @player = Player.create(player_params)
    if @player.valid?
      redirect_to @player
    else
      flash[:error] = @player.errors.full_messages
      redirect_to new_player_path
    end
  end

  def edit
  end

  def update
    @player.update(player_params)
    if @player.valid?
      redirect_to @player
    else
      flash[:error] = @player.errors.full_messages
      redirect_to edit_player_path(@player)
    end
  end

  def destroy
    @player.destroy
    redirect_to players_path
  end

  private

  def player_params
    params.require(:player).permit(:name, game_ids: [])
  end

  def set_player
    @player = Player.find(params[:id])
  end

  def set_games
    @games = Game.all
  end
end
