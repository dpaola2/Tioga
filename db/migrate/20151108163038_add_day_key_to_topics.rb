class AddDayKeyToTopics < ActiveRecord::Migration
  def change
    add_column :topics, :day_key, :integer
  end
end
