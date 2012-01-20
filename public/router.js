define([
	'jquery',
	'underscore',
	'backbone',
	/*
	main plugin view here
	*/
	'core/view/test/test1',
	'core/view/test/test2',
	/*
	path to modules
	*/
	'modules/Boilerplate/boilerplate'
], function($, _, Backbone,  test1View, test2View, boilerplate) {

    var AppRouter = Backbone.Router.extend({
			routes: {
			  '': 	'root',
			},
			root: function(){
				test1View.render();
			},
			initialize: function(options) {
				/*
				initialize plugin here
				*/
				boilerplate.initialize();
			}
	});
  var init = false;
  var initialize = function(){
	if(!init) {
		new AppRouter;
		Backbone.history.start();
		init = true;
  	}
  };
  return {
    initialize: initialize
  };
})

