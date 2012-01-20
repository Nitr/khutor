var buttonScale = function(options) {
	this.init = function() {
		this.relEl = options.relEl || error('el ' + options.currentWidth);
		this.el = options.el || error('el ' + options.currentWidth);
		this.currentWidth = $(this.relEl).width();
		this.normalWidth = options.normalWidth || 800;
		this.type = this.el.attr('type') || 'small'
		this.ctype = this.el.attr('ctype') || options.ctype;
		this.changeType(this.type);
		if(this.el.attr('mouseevents') != 'none') {
			this.setMouseEvents(this.el);
		}
		this.redraw();
		this.initialize = false;
		var self = this;
	}
	this.redraw = function(width) {
			var currentWidth = width || this.currentWidth;
			this.currentWidth = currentWidth;
			var k = (this.currentWidth - this.normalWidth) / this.normalWidth;
			if(this.currentWidth < this.normalWidth) {
				if(this.ctype) {
					this.changeType(this.ctype);
				}
				w = this.minWidth + this.corrW;
				h = this.minHeight + this.corrH;
			}
			else {
				if(this.ctype) {
					this.changeType(this.type);
				}
				w = (this.minWidth + this.corrW) + (this.minWidth) * k,
				h = (this.minHeight + this.corrH) + (this.minHeight) * k;
			}
			this.el.css('width',  w );
			this.el.css('height', h );
	}
	this.changeType = function(type) {
		if(type == 'small') {
			this.minWidth = options.minWidth || 140;
			this.minHeight = options.minHeight || 140;
			this.corrW = options.corrW || 0;
			this.corrH = options.corrH || 0;
			this.releasedX = 1.1;
			this.releasedY =  1.1;
			this.pressedX =  0.9;
			this.pressedY =  0.9;
			this.normalX =  1;
			this.normalY =  1;
			$(this.el).children('.bigtpl, .widetpl, .thintpl').hide();
			$(this.el).children('.smalltpl').show();
		}
		if(type == 'big') {
			this.minWidth =  280;
			this.minHeight = 280;
			this.corrW = 15;
			this.corrH = 15;
			this.releasedX = 1.05;
			this.releasedY =  1.05;
			this.pressedX =  0.95;
			this.pressedY =  0.95;
			this.normalX =  1;
			this.normalY =  1;
			$(this.el).children('.smalltpl, .widetpl, .thintpl').hide();
			$(this.el).children('.bigtpl').show();
		}
		if(type == 'wide') {
			this.minWidth =  280;
			this.minHeight = 140;
			this.corrW = 15;
			this.corrH = 0;
			this.releasedX = 1.05;
			this.releasedY =  1.1;
			this.pressedX =  0.95;
			this.pressedY =  0.9;
			this.normalX =  1;
			this.normalY =  1;
			$(this.el).children('.smalltpl, .bigtpl, .thintpl').hide();
			$(this.el).children('.widetpl').show();
		}
		if(type == 'thin') {
			this.minWidth =  140;
			this.minHeight = 280;
			this.corrW = 0;
			this.corrH = 15;
			this.releasedX = 1.1;
			this.releasedY =  1.05;
			this.pressedX =  0.9;
			this.pressedY =  0.95;
			this.normalX =  1;
			this.normalY =  1;
			$(this.el).children('.smalltpl, .bigtpl, .widetpl').hide();
			$(this.el).children('.thintpl').show();
		}
	}
	this.setMouseEvents = function(el) {
		var self = this;
		$(el).bind({
			mouseenter: function() {
				$(this).css({background:  '#6b6868'});
				$(this).css('-webkit-transform', 'scale('+self.releasedX + ',' + self.releasedY + ')');
			},
			mouseleave: function() {
				$(this).css('background',  '#2e2d2d');
				$(this).css('-webkit-transform', 'scale('+self.normalX + ',' + self.normalX + ')');
			 },
			mousedown: function() {
				$(this).css('-webkit-transform', 'scale('+self.pressedX + ',' + self.pressedY + ')');
			},
			mouseup: function(e) {
				$(this).css('-webkit-transform', 'scale('+self.normalX + ',' + self.normalX + ')');
				if(self.el.attr('href')) {
					$(self.relEl).fadeOut(200, function() {
							window.location = '#' + self.el.attr('href');
					});
				}
			}
		});
	}
}

function redraw(el, w, h, ratio, minW, maxW) {
			var main = el;
			if(w < 800) {
				main.css('width', '100%' );
				main.css('height', '100%' );
			}
			else {
				var currentW = parseInt(main.css('width'));
				var currentH = parseInt(main.css('height'));
				if(!this.initialize) {
					currentH = currentW / ratio;
				}
				var wd = w - currentW, hd = h - currentH;
				var newWidth = 0, newHeight = 0;

					if(wd > hd) {
						newWidth = h * ratio;
						newHeight = h;
					}
					else {
						newWidth = w;
						newHeight = w / ratio;
					}
					if(newWidth > maxW) {
						newWidth = maxW;
						newHeight = maxW / ratio;
					}
					if(newWidth < minW) {
						newWidth = minW;
						newHeight = minW / ratio;
					}
					main.css('width', newWidth );
					main.css('height', newHeight );
			}
			main.trigger('redraw');
}

var dateType = function() {
	this.time = new Date();
	this.time = this.time.getTime();
}
dateType.prototype = {
	constructor: dateType,
	getDate: function(n){
		var fullDate = new Date(this.time + n * 86400000 || this.time);
		var year = 		fullDate.getFullYear(),
			month = 	fullDate.getMonth() + 1,
			date = 		fullDate.getDate() 		>= 10? fullDate.getDate() 	: '0' + fullDate.getDate(),
			hour = 		fullDate.getHours() 	>= 10? fullDate.getHours()	: '0' + fullDate.getHours(),
			minute = 	fullDate.getMinutes() 	>= 10? fullDate.getMinutes(): '0' + fullDate.getMinutes(),
			second =	fullDate.getSeconds() 	>= 10? fullDate.getSeconds(): '0' + fullDate.getSeconds();


		return  year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
	}

}

