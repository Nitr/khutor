define([
  'jquery',
  'underscore',
  'backbone',
  'modules/login/models/login',
  'text!modules/login/tmpl/login.html'
], function($, _, Backbone, loginModel, loginTemplate){

  var loginView = Backbone.View.extend({
    el: $("body"),
	events: {
    "click #enter": "login"
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
			console.log('запрос на авторизацию');
			var user = new loginModel();
			user.save({user: {email: name.val(), password: pass.val()}}, {success: function(){ alert(1);}, error: function(a){ console.log(a.responseText); }});
		}
		return false;
	}
  });
  return new loginView;
});

