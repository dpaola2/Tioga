class AddCompleteToThings < ActiveRecord::Migration
  def change
    add_column :things, :complete, :boolean, default: false, null: false, required: true
  end
end
