class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  def create
    @category = Category.new(category_params)
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
    params.require(:category).permit(:category)
  end
end
