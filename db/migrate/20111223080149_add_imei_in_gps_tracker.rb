class AddImeiInGpsTracker < ActiveRecord::Migration
  def self.up
    add_column :gps_trackers, :imei, :integer
  end

  def self.down
    remove_column :gps_trackers, :imei
  end
end

