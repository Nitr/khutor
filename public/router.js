define([
	'jquery',
	'underscore',
	'backbone',
	/*Модули*/
	'modules/login/login',

	/*Функции*/
	'lib/pineta/loadCss'
], function($, _, Backbone,  /*Модули*/ login  /*Функции*/) {

    var AppRouter = Backbone.Router.extend({
			routes: {
			  '': 	'root',
			},
			root: function(){
				//test1View.render();
			},
			initialize: function(options) {
				/*
				initialize modules here
				*/
				login.initialize();
			}
	});

  return {
    initialize: function() {
			new AppRouter;
			Backbone.history.start();
		}
	  }
});

