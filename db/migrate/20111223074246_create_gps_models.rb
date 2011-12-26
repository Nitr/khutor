class CreateGpsModels < ActiveRecord::Migration
  def self.up
    create_table :gps_models do |t|
      t.string :name
      t.string :parser
	 #t.timestamps
    end
  end

  def self.down
    drop_table :gps_models
  end
end

