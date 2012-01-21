define([

	'jquery',
	'underscore',
	'backbone',
	/* Views */
	'modules/login/views/login',
	/* Libs*/
	'lib/pineta/loadCss'

], function($, _, Backbone, loginView ) {

	loadCss('modules/login/css/style.css');

	var LoginRouter = Backbone.Router.extend({
		routes: {
		  'login': 'show'
		},
		show: function(){
			loginView.render();
			console.log('log');
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

