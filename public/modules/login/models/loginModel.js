define([], function() {
	var loginModel = Backbone.Model.extend({
		defaults: {
			root: ''
		},
		login: function() {
			var self = this;
	        var xhr = new XMLHttpRequest();
			var userData = new FormData();
			var user = this.get("user");
  			xhr.open('POST', '/users/sign_in.json', true);
			xhr.onload = function(e) {
							switch(this.status) {
								case 201: console.log("Транзакция прошла успешно " + this.status); self.redirect(); break;
								case 401: console.log("Не авторизован " + this.status); break;
								default:  console.log("Неожиданный ответ сервера " + this.status);
							}
						 };
			userData.append("utf8", "✓");
			userData.append("user[email]", user.email);
			userData.append("user[password]", user.password);
			userData.append("user[remember_me]", "0");
			userData.append("commit","Sign in");
			xhr.send(userData);
		},
		logout: function() {
			var xhr = new XMLHttpRequest();
			xhr.open('DELETE', '/users/sign_out.json', true);
			xhr.send();
		},
		redirect: function() {
			window.location.hash = this.get("root");
		},
		initialize: function() {

		}
	});

	return loginModel;
});

