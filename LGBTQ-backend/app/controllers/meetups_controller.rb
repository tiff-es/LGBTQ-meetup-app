class MeetupsController < ApplicationController
  def index
    @meetups = Meetup.all
    render json: @meetups
  end

  def create
    @meetup = Meetup.create_or_find_by(meetup_params)
    render json: @meetup
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

  # def request_mapbox
  #
  # end
end
