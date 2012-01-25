define([], function() {
	var logoutModel = Backbone.Model.extend({
		urlRoot : '/users/sign_out'
	});

	return logoutModel;
});

