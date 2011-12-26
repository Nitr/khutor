class Gps::ModelsController < ApplicationController
  def index
	render :json => GpsModel.find(:all)
  end
  def show
    render :json => GpsModel.find(params[:id])
  end
  def create
	model = GpsModel.new(params[:gps_model])
	if model.save
		render :json => model, :status => :created
	else
		render :json => model.errors, :status => :unprocessable_entity
	end
  end
  def update
	model = GpsModel.find(params[:id])
	if model.update_attributes(params[:gps_model])
		head :ok
	else
		render :json => @data.errors, :status => :unprocessable_entity
	end
  end
  def destroy
    GpsModel.find(params[:id]).destroy
    head :ok
  end
end

