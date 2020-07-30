class MeetupsController < ApplicationController
  skip_before_action :require_login

  def index
    @meetups = Meetup.all
    render json: @meetups
  end
  def create
    @meetup = Meetup.create(meetup_params)
    byebug
    @category = Category.find_by(name: params[:newMeetup][:category])
    @user = User.find_by(user_id: params[:currentUser][:user_id])
    @meetup.update(category_id: @category.id)
    byebug

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
    params.require(:newMeetup).permit(:id, :category_id, :user_id, :location, :lat, :lon, :time, :date, :info, :name)
  end

  # def request_mapbox
  #
  # end
end
