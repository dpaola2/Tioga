class AddPostponedToThings < ActiveRecord::Migration
  def change
    add_column :things, :previous_id, :integer
    add_column :things, :first_id, :integer
    add_column :things, :times_postponed, :integer, default: 0, null: false, required: true
  end
end
