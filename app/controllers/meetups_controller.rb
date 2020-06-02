class MeetupsController < ApplicationController
  skip_before_action :require_login

  def index
    @meetups = Meetup.all
    render json: @meetups
  end
  def create
    #byebug
    @meetup = Meetup.create(meetup_params)
    @category = Category.find_by(name: params[:newMeetup][:category])
    @meetup.update(category_id: @category.id)

    render json: @meetup
  end
  #find or create by w/ date / Time

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
    params.require(:newMeetup).permit(:category_id, :location, :lat, :lon, :time, :date, :info, :name)
  end

  # def request_mapbox
  #
  # end
end