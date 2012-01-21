require.config({
  paths: {
    jquery: 	'lib/vendors/jquery/jquery-1.7.1.min',
    underscore: 'lib/vendors/underscore/underscore-min',
    backbone: 	'lib/vendors/backbone/backbone-optamd3-min',
    text: 		'lib/vendors/require/text',
  }
});
/*
define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'lib/pineta/loadCss'
], function($, _, Backbone, Router) {
		Router.initialize();
});
*/
require([
  'router'
], function(Router){
  	Router.initialize();
});

