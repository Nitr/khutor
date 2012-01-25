define([], function() {
	var boilerplateModel = Backbone.Model.extend({
		defaults: {
		  score: 10
		},
		initialize: function() {
			console.log('boilerplate model init')
		}
	});
	return boilerplateModel;
});

