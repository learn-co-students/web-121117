class SongsController < ApplicationController
  def index



    # I can look in sessions
    # I can find my user_id
    # I can find my user using user_id
    # I can then find my songs using my user
    # and then show songs

    if logged_in?
      @songs = current_user.songs
    else
      @songs = Song.all
    end
  end

  def show
    @song = Song.find(params[:id])
  end

  def new
    @song = Song.new
  end


  def create
    @song = Song.new(song_params)
    if @song.save
      redirect_to @song
    else
      flash[:errors] = @song.erros.full_messages
      redirect_to new_song_path
    end
  end

  def edit
    @song = Song.find(params[:id])
  end


  private
    def song_params
      params.require(:song).permit(:title)
    end
end
