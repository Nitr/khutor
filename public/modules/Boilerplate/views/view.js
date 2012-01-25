define(['text!modules/Boilerplate/tmpl/boilerplate.html', 'modules/Boilerplate/collections/collection'], function(boilerplateTemplate, boilerplateCollection) {

	var boilerplateView = Backbone.View.extend({
		el: $("body"),
		render: function() {
			var tmpl = _.template( boilerplateTemplate)
			this.el.html(tmpl);
		},
		initialize: function() {

			console.log('boilerplate view init')
		}
	});

	return new boilerplateView;
});

