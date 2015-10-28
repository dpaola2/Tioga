class TopicsController < ApplicationController
  before_action :authenticate_user!

  def index
    @tomorrow = current_user.topics.tomorrow.first
    @today = current_user.topics.today.first
    @past_topics = current_user.topics.past.limit(25)
  end
end
