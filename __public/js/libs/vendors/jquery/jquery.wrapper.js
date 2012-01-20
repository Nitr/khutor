// Filename: libs/vendors/jquery/jquery.wrapper.js

define([
// Load the original jQuery source file
  'order!libs/vendors/jquery/jquery-1.7.1.min'
], function(){
  // Tell Require.js that this module returns a reference to jQuery
  return $;
});
// Filename: libs/underscore/underscore
// As above lets load the original underscore source code
define(['order!libs/underscore/underscore-min'], function(){
  // Tell Require.js that this module returns  a reference to Underscore
  return _;
});
 // Filename: libs/backbone/backbone
 // Finally lets load the original backbone source code
define(['order!libs/backbone/backbone-min'], function(){
  // Now that all the orignal source codes have ran and accessed each other
  // We can call noConflict() to remove them from the global name space
  // Require.js will keep a reference to them so we can use them in our modules
  _.noConflict();
  $.noConflict();
  return Backbone.noConflict();
});

