class AddYearsToTopicNames < ActiveRecord::Migration
  def change
    Topic.all.each do |topic|
      topic.name = topic.created_at.strftime("%a, %b %d %Y")
      topic.save!
    end
  end
end
