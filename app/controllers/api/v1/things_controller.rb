class API::V1::ThingsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!

  def show
    @thing = Thing.includes(:topic).find(params[:id])
    if @thing.topic.user != current_user
      render json: {
               error: 'Not your thing.'
      }, status: 403
    else
      render json: @thing.to_json(include: :topic)
    end
  end

  def create
    @thing = Thing.create! thing_params
    render json: @thing.to_json(include: :topic)
  end

  def update
    @thing = Thing.find(params[:id])
    @thing.update_attributes(thing_params)
    render json: @thing.to_json(include: :topic)
  end

  private

  def thing_params
    params.permit([:topic_id, :name, :complete])
  end
end
