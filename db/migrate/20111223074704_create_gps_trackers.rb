class CreateGpsTrackers < ActiveRecord::Migration
  def self.up
    create_table :gps_trackers do |t|
      t.string :name
      t.references :gps_model
      #t.timestamps
    end
  end

  def self.down
    drop_table :gps_trackers
  end
end

