// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jQuery: 'libs/vendors/jquery/jquery-1.7.1',
    Underscore: 'libs/vendors/underscore/underscore',
    Backbone: 'libs/vendors/backbone/backbone'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',

  // Some plugins have to be loaded in order due to there non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
  'order!libs/vendors/jquery/jquery-1.7.1.min',
  'order!libs/vendors/underscore/underscore-min',
  'order!libs/vendors/backbone/backbone-min'
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
