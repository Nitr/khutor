Khutor::Application.routes.draw do
	devise_for :users
	devise_scope :user do
	  get "/logout" => "devise/sessions#destroy"
	end
	root :to => "gps/trackers#index"
#######---CORS---#######
 match ':controller', :controller => 'application', :action => 'options', :constraints => {:method => 'OPTIONS'}
 match ':controller/:id', :controller => 'application', :action => 'options', :constraints => {:method => 'OPTIONS'}

#######---GPS TRACKER---#######
	namespace :gps do
		resources :trackers, :except => [:edit, :new] do
			member do
				get '/showtrack'					 => 'user_function#showAll'
				get '/showtrack/from/:start'		 => 'user_function#showFromDate'
				get '/showtrack/from/:start/to/:end' => 'user_function#showFromToDate'
			end
			collection do
				get 'withmodel' => 'user_function#ShowAllTrackersWithModel'
			end
		end
		resources :models, :except => [:edit, :new]
	end
end

