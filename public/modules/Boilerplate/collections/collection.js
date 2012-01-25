define(['modules/Boilerplate/models/model'], function(boilerplateModel) {

  var  boilerplateCollection = Backbone.Collection.extend({
    model: boilerplateModel,
    initialize: function(){
		new boilerplateModel
		console.log('boilerplate collection init');
    }
  });

  return new boilerplateCollection;
});

