define(['modules/login/views/loginView'], function(loginView ) {

	loadCss('modules/login/css/style.css');

	var LoginRouter = Backbone.Router.extend({
		routes: {
		  'login': 'login',
		  'logout': 'logout'
		},
		login: function(){
			loginView.render();
		},
		logout: function(){
			loginView.logout();
		},
		initialize: function(options) {
		}
	});

	return {
		initialize: function(){
			 new LoginRouter;
		}
	};
});

