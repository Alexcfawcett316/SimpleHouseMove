class CreateCalculations < ActiveRecord::Migration
  def change
    create_table :calculations do |t|
      t.text :email
      t.decimal :houseValue
      t.decimal :depositAmount
      t.decimal :mortgageAmount

      t.timestamps
    end
  end
end
