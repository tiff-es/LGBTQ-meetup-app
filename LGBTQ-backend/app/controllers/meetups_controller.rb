class MeetupsController < ApplicationController
  def index
    @meetups = User.all
    render json: @meetups
  end

  def create
    @meetup = User.new(meetup_params)
  end

  def show
    @meetup = User.find(params[:id])
    render json: @meetup
  end

  def update
    @meetup = User.find(params[:id])
    render json: @meetup
  end

  private
  def meetup_params
    params.permit(:location, :category_id, :time, :date, :info )
  end
end
