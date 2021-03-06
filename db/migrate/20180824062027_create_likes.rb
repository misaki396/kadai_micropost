class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, foreign_key: true
      t.integer :micropost_id, foreign_key: true

      t.timestamps
      
      t.index [:user_id, :micropost_id], unique: true
    end
  end
end
