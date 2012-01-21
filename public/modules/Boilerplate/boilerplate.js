/*
Boilerplate / шаблон модуля
file: modules/Boilerplate/boilerplate.js
*/
define([
	/*
	Default depending.
	*/
	'jquery',
	'underscore',
	'backbone',
	/*
	Your depending is here.

	Example:
	'modules/gps/ your_path'
	*/
	'modules/Boilerplate/views/view',


], function($, _, Backbone, boilerplateView) {

	loadCss('modules/Boilerplate/css/style.css');

	var BoilerplateRouter = Backbone.Router.extend({
		routes: {
		  'boilerplate': 'show'
		},
		show: function(){
			boilerplateView.render();
			console.log('Boilerplate');
		},
		initialize: function(options) {
		}
	});

	return {
		initialize: function(){
			 new BoilerplateRouter;
		}
	};
});

