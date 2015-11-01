class CreateThings < ActiveRecord::Migration
  def change
    create_table :things do |t|
      t.string :name, default: '', null: false, required: true
      t.integer :topic_id, null: false, required: true
      t.string :thing_type, default: 'todo', null: false, required: true
      t.boolean :important, default: false, null: false, required: true

      t.timestamps
    end
  end
end
