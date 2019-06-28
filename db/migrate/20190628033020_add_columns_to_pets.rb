class AddColumnsToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :breed, :string, after: :birthday
    add_column :pets, :description, :string, after: :birthday
  end
end
