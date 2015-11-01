class API::V1::ThingsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_topic

  def index
    @things = @topic.things
    render json: {
             topic: @topic,
             things: @things
           }
  end

  private

  def find_topic
    @topic = current_user.topics.find(params[:topic_id])
  rescue ActiveRecord::RecordNotFound
    render json: {
             error: 'Topic not found.'
           }
  end
end
