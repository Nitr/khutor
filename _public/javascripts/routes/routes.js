var AppRouter = Backbone.Router.extend({
	routes: {
		"": 				 "root",
		"/": 				 "root",
		"/trackers":		 "viewTrackers",
	    "/tracker/:id": 	 "editTrackers"
	},
	initialize: function() {

	},
	root: function() {
		 this.mainview = this.mainview || new mainView();
		 this.mainview.refresh();
	},
	viewTrackers: function() {
		this.viwetrackers = this.viwetrackers || new trackersView();
		this.viwetrackers.refresh();
	},
	editTrackers: function(id) {
		this.edittracker = this.edittracker || new trackerEditView();
		this.edittracker.id = id;
		this.edittracker.refresh();
	}
});

