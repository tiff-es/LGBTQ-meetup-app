class MeetupsController < ApplicationController
  def index
    @meetups = Meetup.all
    render json: @meetups
  end

  def create
    @meetup = Meetup.new(meetup_params)
  end

  def show
    @meetup = Meetup.find(params[:id])
    render json: @meetup
  end

  def update
    @meetup = Meetup.find(params[:id])
    render json: @meetup
  end

  private
  def meetup_params
    params.permit(:location, :category_id, :time, :date, :info )
  end
end
