class API::V1::TopicsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!
  
  def index
    @topics = current_user.topics.includes(:things)
    render json: @topics.to_json(include: :things)
  end
  
  def show
    @topic = current_user.topics.includes(:things).find(params[:id])
    render json: @topic.to_json(include: :things)
  rescue ActiveRecord::RecordNotFound
    render json: {
             error: 'Topic not found.'
           }
  end

  def create
    @topic = current_user.topics.create! topic_params
    render json: @topic.to_json(include: :things)
  end

  private

  def topic_params
    params.permit(
      [
        :name
      ])
  end
end
