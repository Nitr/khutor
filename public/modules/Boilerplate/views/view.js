define([
  'jquery',
  'underscore',
  'backbone',
/*
шаблоны указываем через text!
*/

  'text!modules/Boilerplate/tmpl/boilerplate.html'
], function($, _, Backbone, boilerplateTemplate){

  var boilerplateView = Backbone.View.extend({
    el: $("#tr"),
    render: function(){
	  var tmpl = _.template( boilerplateTemplate)
      this.el.html(tmpl);
    }
  });
  return new boilerplateView;
});

