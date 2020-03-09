git pclass CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  def create
    @category = Category.create_or_find_by(category_params)
    render json: @category
  end

  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  def update
    @category = Category.find(params[:id])
    render json: @category
  end

  private
  def category_params
    params.require(:category).permit(:name, :category_id)
  end
end
