class API::V1::ThingsController < ApplicationController
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
end
