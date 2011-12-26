class GpsTracker < ActiveRecord::Base
	has_many :gps_datas
	belongs_to :gps_model
end

