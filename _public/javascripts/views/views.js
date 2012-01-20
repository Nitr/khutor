var mainView = Backbone.View.extend({
		el: '#main',
		tmpl: function() {
			return new EJS({url: 'tmpl/main.ejs', cache: false});
		},
		initialize: function() {
			this.buttons = new Array();
		},
		events: {
			'redraw' : 'scaleButtons'
		},
		render: function() {
			$(this.el).html(this.tmpl().render());
		},
		scaleButtons: function() {
			var width = $(this.el).width();
			for(var i = 0, max = this.buttons.length; i < max; i+=1) {
				this.buttons[i].redraw(width);
			}
		},
		refresh: function(){
			this.render();
			var self = this;
			redraw($(this.el),  window.innerWidth  ,window.innerHeight , 1.25 , 800, 1024 );
			$('.box').each(function(n, element) {
				self.buttons[n] = new buttonScale({relEl:$(self.el), el: $(element)});
				self.buttons[n].init();
			});
			$(window).bind('resize',function() {
				redraw($(self.el),  window.innerWidth  ,window.innerHeight , 1.25 , 800, 1024 );
			});
			$(this.el).fadeIn(200);
		}
});
var trackersView = Backbone.View.extend({
	el: '#main',
	tmpl: function() {
			return new EJS({url: 'tmpl/trackers.ejs', cache: false});
	},
	events: {
			"click table.list tr td a.delete": "del",
			"click table.list tr td.name": "showTrack"
	},
	initialize: function() {
			this.trackerColl = new trackers();
	},
	render: function() {
			$(this.el).html(this.tmpl().render({ data: this.trackerColl.toJSON() }));
			$(this.el).fadeIn(200);
	},
	del: function(e) {
			var elem = $(e.target).closest("tr");
			var id = elem.children('input.id').val();
			if(this.trackerColl.del(id)) {
				elem.remove();
			}
			return false;
	},
	showTrack: function(e) {
			var elem = $(e.target).closest("tr");
			var id = elem.children('input.id').val();
			new trackView({id: id});
	},
	refresh: function() {
			var self = this;
			this.trackerColl.fetch({success: function() { self.render(); } });
	}
});
var trackerEditView = Backbone.View.extend({
	el: '#main',
	tmpl: function() {
			return new EJS({url: 'tmpl/tracker.ejs', cache: false});
	},
	events: {
		"click #saveTracker": "save"
  	},
	render: function() {
			if(this.traker.length == 0 || this.trackerModels.length == 0) {
					return;
			}
			else {
				var self = this;
				$(this.el).html(this.tmpl().render({ tracker: self.traker.toJSON(), models: self.trackerModels.toJSON() }));
				$(this.el).fadeIn(200);
			}
		return this;
	},
	save: function(e) {
			var tracker_name = $("#edit_tracker_name").val(), tracker_model = $("#selectModelTracker option:selected").val();
			this.traker.save({ name: tracker_name, gps_model_id: tracker_model });
			window.history.back();
			return false;
	},
	refresh: function() {
			var self = this;
			this.traker = new traker({id: self.id});
			this.trackerModels = new trackerModels();
			this.traker.fetch({success: function() { self.render(); } });
			this.trackerModels.fetch({success: function() { self.render(); }});
	}
});
var trackView = Backbone.View.extend({
	el: '#track',
	tmpl: function() {
			return new EJS({url: 'tmpl/track.ejs', cache: false});
	},
	events: {
		'click #renderTrack': 'renderTrack'
	},
	initialize: function() {
			var self = this;
			var now = new dateType();
			this.data = new trackerDatas();
			this.url = this.data.url;
			this.data.url += '/' + this.id + '/' + now.getDate(-3) + '/' + now.getDate();
			this.data.fetch({success: function(){ self.render(); }});
	},
	render: function() {
			$(this.el).html(this.tmpl().render());
			$(this.el).fadeIn(200);
			this.initMap();
			this.buildTrack();
			$('#startDate').datetime();
			$('#endDate').datetime();
	},
	initMap: function() {
			var myOptions = {
							zoom: 8,
							center: new google.maps.LatLng(56.1488, 47.262),
							mapTypeId: google.maps.MapTypeId.ROADMAP
						};
			this.map = new google.maps.Map(document.getElementById("map"), myOptions);
	},
	renderTrack: function() {
			var startDate = $('#startDate').val(), endDate = $('#endDate').val();
			if(startDate == '') {
				return false;
			}
			else {
				startDate += ':00';
					if(endDate != '') {
						endDate += ':00';
					}
			}
			var self = this;
			this.data.url = this.url + '/' + this.id + '/' + startDate + '/' + endDate;
			this.data.fetch({success: function() { self.buildTrack(); }});
			return false;
	},
	buildTrack: function() {
		var poly = new Array();
		this.data.each(function(item) {
			poly.push(new google.maps.LatLng(item.get('lat'), item.get('lan')));
		});
		if(this.data.length < 2) {
			return
		}
		var polyOpt = {
					path: poly,
					strokeColor: "#ff0000",
					strokeOpacity: 1.0,
					strokeWeight: 2
				}
		if(this.polyPath) {
			this.polyPath.setMap(null);
		}
		var newPath = new google.maps.Polyline(polyOpt);
		newPath.setMap(this.map);
		this.polyPath = newPath;
		this.map.setCenter(poly[0]);
	}
});

