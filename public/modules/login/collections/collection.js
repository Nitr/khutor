define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Boilerplate/models/model'
], function($, _, Backbone, boilerplateModel){
  var  boilerplateCollection = Backbone.Collection.extend({
    model: boilerplateModel,
    initialize: function(){

    }

  });

  return new boilerplateCollection;
});

