define([
	'jquery',
	'underscore',
	'backbone',
	'modules/gps/router'
], function($, _, Backbone, Router) {
		var initialize = function(){
				Router.initialize();
		};

		return {
			initialize: initialize
		}
});

