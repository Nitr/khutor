class ApplicationController < ActionController::Base
  protect_from_forgery
	after_filter :set_access_control_headers, :only => [:index, :new, :create, :show, :edit, :update, :destroy, :options]
	rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

	def options
		head :ok
	end

	private

	def record_not_found
		render :text => "404 Not Found", :status => 404
	end
	def set_access_control_headers
		headers['Access-Control-Allow-Origin'] = "*"
		headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, DELETE, PUT'
		headers['Access-Control-Max-Age'] = '1000'
		headers['Access-Control-Allow-Credentials'] = 'true'
		headers['Access-Control-Allow-Headers'] = '*,x-requested-with,Content-Type,X-PINGOTHER'
	end
end

