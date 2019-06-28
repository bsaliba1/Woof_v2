class AddForeignKeyToPets < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :pets, :users, index: true, foreign_key: true
  end
end
