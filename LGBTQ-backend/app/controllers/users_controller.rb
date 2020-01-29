class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create_or_find_by(user_params)
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:id, :name,:picture,:bio,:user_id,:pronouns)
  end
end
