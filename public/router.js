define([
	'modules/login/loginRouter',
], function(loginRouter) {

    var AppRouter = Backbone.Router.extend({
			routes: {
			  '': 	'root',
			},
			root: function(){
				$("body").html('');
			},
			initialize: function(options) {
				loginRouter.initialize();
			}
	});

  return {
    initialize: function() {
			new AppRouter;
			Backbone.history.start();
		}
	  }
});

