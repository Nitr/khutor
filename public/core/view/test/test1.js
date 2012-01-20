define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  	var test1View = Backbone.View.extend({
    el: $("#tr"),
    render: function(){
      this.el.html('test1Template');
    }
  });
  return new test1View;
});

