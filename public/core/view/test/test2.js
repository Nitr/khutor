define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  	var test2View = Backbone.View.extend({
    el: $("#tr"),
    render: function(){
      this.el.html('test2Template');
    }
  });
  return new test2View;
});

