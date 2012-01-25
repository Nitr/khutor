require.config({
  paths: {
    text: 		'lib/vendors/require/text'
  }
});

require([
  'router'
], function(Router){
  	Router.initialize();
});

