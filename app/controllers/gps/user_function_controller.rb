class Gps::UserFunctionController < ApplicationController
	require 'date'
	def showAll
		render :json => GpsData.where("gps_tracker_id = ? AND date >= ? AND date <= ?", params[:id], 10.days.from_now.to_s(:db), Time.zone.now.to_s(:db))
	end
	def showFromDate
		render :json => GpsData.where("gps_tracker_id = ? AND date >= ?", params[:id], Time.zone.parse(params[:start]).to_s(:db))
	end
	def showFromToDate
		render :json => GpsData.where("gps_tracker_id = ? AND date >= ? AND date <= ?", params[:id], Time.zone.parse(params[:start]).to_s(:db) , Time.zone.parse(params[:end]).to_s(:db))
	end
end

