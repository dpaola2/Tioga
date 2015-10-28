class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :name, null: false, required: true
      t.string :week
      t.string :day_of_week
      t.string :year_month
      t.integer :user_id, null: false, required: true

      t.timestamps
    end
  end
end
