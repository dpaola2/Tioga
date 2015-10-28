class VisitorsController < ApplicationController
  def index
    if user_signed_in?
      redirect_to topics_index_path
    end
  end
end
