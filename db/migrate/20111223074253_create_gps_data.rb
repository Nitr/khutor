class CreateGpsData < ActiveRecord::Migration
  def self.up
    create_table :gps_data do |t|
      t.float :lat
      t.float :lan
      t.datetime :date
      t.references :gps_tracker
      t.timestamps
    end
  end

  def self.down
    drop_table :gps_data
  end
end

