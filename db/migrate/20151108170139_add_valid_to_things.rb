class AddValidToThings < ActiveRecord::Migration
  def change
    add_column :things, :legit, :boolean, default: true, required: true, null: false
  end
end
