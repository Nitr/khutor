define(['modules/Boilerplate/views/view'], function(boilerplateView) {

	loadCss('modules/Boilerplate/css/style.css');
	var BoilerplateRouter = Backbone.Router.extend({
		routes: {
		  'boilerplate': 'show'
		},
		show: function(){
			boilerplateView.render();
		}
	});

	return {
		initialize: function(){
			 new BoilerplateRouter;
		}
	};
});

