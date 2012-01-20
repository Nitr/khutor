define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	var boilerplateModel = Backbone.Model.extend({
		defaults: {
		  score: 10
		},
		initialize: function() {
		}
	});
	return boilerplateModel;
});

