	var trackerModels = Backbone.Collection.extend({
		model: trackerModel,
		url: 'http://0.0.0.0:3000/model'
	});
	var trackers = Backbone.Collection.extend({
		model: traker,
		url: 'http://0.0.0.0:3000/main',
		del: function(id) {
			this.get(id).destroy({success: function(){ return true;}, error: function(){ return false;} });
		}
	});
	var trackerDatas = Backbone.Collection.extend({
		model: trackerData,
		url: 'http://0.0.0.0:3000/tracker'
	});

