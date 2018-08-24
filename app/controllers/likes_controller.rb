class LikesController < ApplicationController
  def create
    @like = Like.new(
      user_id: current_user.id,
      micropost_id: params[:micropost_id])
    @like.save
    redirect_to ("/users/#{params[:micropost_id]}")
  end
  

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      micropost_id: params[:micropost_id])
    @like.destroy
    redirect_to ("/users/#{params[:micropost_id]}")
  end
end
