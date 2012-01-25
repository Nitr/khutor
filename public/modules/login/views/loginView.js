define(['modules/login/models/loginModel','modules/login/models/logoutModel','text!modules/login/tmpl/login.html'], function(loginModel, logoutModel, loginTemplate) {

  var loginView = Backbone.View.extend({
    el: $("body"),
	events: {
    "click #enter": "login"
  	},
	initialize: function() {
		var authRE = /auth=true/gi;
		this.user = new loginModel();

		if(authRE.test(document.cookie)) {
			window.location.hash = '';
		}
		else{
			document.cookie = "auth=false;";
		}
	},
    render: function(){
	  var tmpl = _.template(loginTemplate);
      this.el.html(tmpl);
	  $('#login').animate({opacity: 1},500);
	},
	login: function(){
		var name = $("#name");
			pass = $("#pass"),
			err = $("div.error"),
			er_text = '';
		if(name.val() == '') {
			er_text = 'Вы не ввели имя'
			name.addClass('error');
		}
		else {
			name.removeClass('error');
		}
		if(pass.val() == '') {
			if(er_text != '') {
				er_text += '<br>';
			}
			er_text += 'Вы не ввели пароль';
			pass.addClass('error');
		}
		else {
			pass.removeClass('error');
		}
		if(er_text != ''){
			err.html(er_text);
			return false;
		}
		else {
			this.user.set({user: { email: name.val(), password: pass.val()}});
			this.user.login();
		}
		return false;
	},
	logout: function(){
			this.user.logout();
	}
  });
  return new loginView;
});

