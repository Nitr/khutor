define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
  	var GpsRouter = Backbone.Router.extend({
			routes: {
			  'gps': 'startGps',
			  'gps/test': 'testGps',
			},
			startGps: function(){
				this.i++;
				console.log('startGps ' + this.i);
			},
			testGps: function(){
				console.log('testGps');
			},
			initialize: function(options) {
				this.i = 0;
				console.log('init gps');
			}
	});
  var initialize = function(){
		 new GpsRouter;
  };
  return {
    initialize: initialize
  };
});

