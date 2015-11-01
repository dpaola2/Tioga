class API::V1::TopicsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @tomorrow = current_user.topics.tomorrow.first
    @today = current_user.topics.today.first
    @past_topics = current_user.topics.includes(:things).past.limit(25)
    
    render json: @past_topics.to_json(include: :things)
  end
  
  def show
    @topic = current_user.topics.includes(:things).find(params[:id])
    render json: @topic.to_json(include: :things)
  rescue ActiveRecord::RecordNotFound
    render json: {
             error: 'Topic not found.'
           }
  end
end
