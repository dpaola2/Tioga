class API::V1::TopicsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @past_topics = current_user.topics.includes(:things).past.limit(25)
    @future_topics = current_user.topics.includes(:things).future.limit(25)

    @topics = @future_topics.reverse.concat(@past_topics)
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

  def past
    @past_topics = current_user.topics.includes(:things).past.limit(25)
    render json: @topics.to_json(include: :things)
  end

  def future
    @future_topics = current_user.topics.includes(:things).future.limit(25)
    render json: @future_topics.to_json(include: :things)
  end
end
