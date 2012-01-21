define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	var loginModel = Backbone.Model.extend({
		defaults: {
		  utf8: "✓",
		  user: {
		  	email: "",
		    password: "",
			remember_me: 0
		  },
		  commit: "Sign in"
		},
		urlRoot : '/users/sign_in',
	});
	return loginModel;
});

