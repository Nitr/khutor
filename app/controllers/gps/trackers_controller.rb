class Gps::TrackersController < ApplicationController
	before_filter :authenticate_user!, :except => [:index]
  def index
	 render :json => current_user
	#render :json =>  GpsTracker.all(:joins => :gps_model, :select => "*")
  end
  def show
	render :json => GpsTracker.find(params[:id], :joins => :gps_model, :select => "*")
  end
  def create
	tracker = GpsTracker.new(params[:gps_tracker])
	if tracker.save
		render :json => tracker, :status => :created
	else
		render :json => tracker.errors, :status => :unprocessable_entity
	end
  end
  def update
	tracker = GpsTracker.find(params[:id])
	if tracker.update_attributes(:gps_model_id => params[:gps_model_id], :name => params[:name])
		head :ok
	else
		render :json => tracker.errors, :status => :unprocessable_entity
	end
  end
  def destroy
    GpsTracker.find(params[:id]).destroy
    head :ok
  end
end

