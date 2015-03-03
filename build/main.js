(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.body);
},{"./App.js":"/Users/camh/Documents/availabilitytrackr/app/App.js","react":"react"}],"/Users/camh/Documents/availabilitytrackr/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');


var ChildDayTimeEntry = React.createClass({displayName: "ChildDayTimeEntry",
	getDefaultProps: function() {
		return {
			display: "block"
		}
	},
	render: function() {
		return (React.createElement("div", {className: "container", style: {display: this.props.display}}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("b", null, "Unavailable from:")
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("button", {onClick: this.deleteClick}, "Delete")
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("div", {className: "form-group"}, 
								React.createElement("div", {className: "input-group date datetimepicker"}, 
									React.createElement("input", {type: "text", className: "form-control"}), 
									React.createElement("span", {className: "input-group-addon"}, React.createElement("span", {className: "glyphicon glyphicon-time"})
									)
								)
							)
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("b", null, "to:")
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("div", {className: "form-group"}, 
								React.createElement("div", {className: "input-group date datetimepicker"}, 
									React.createElement("input", {type: "text", className: "form-control"}), 
									React.createElement("span", {className: "input-group-addon"}, React.createElement("span", {className: "glyphicon glyphicon-time"})
									)
								)
							)
						)
					)
				));
	},
	deleteClick: function() {
		this.setProps({display: "none"});
	}
});

var DayTimeEntry = React.createClass({displayName: "DayTimeEntry",
	myRows: [React.createElement(ChildDayTimeEntry, {key: 0})],
	getInitialState: function() {
		return {
			clicked: false,
			childCounter: 1
		}
	},
	render: function() {
		if (this.state.clicked) {
			return (React.createElement("div", {style: {backgroundColor: "#C0C0C0", padding: "8px"}, className: "container"}, 
						React.createElement("b", null, "test ", this.props.name), 
						this.myRows, 

						React.createElement("div", {className: "row"}, 
							React.createElement("div", {className: "col-sm-6"}, 
								React.createElement("button", {onClick: this.onClick}, 'Add more unavailability for ', " ", this.props.day)
							)
						)

					));
		}

		return (React.createElement("div", {style: {backgroundColor: "#C0C0C0", padding: "8px"}, className: "container"}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							"Available all day - ", React.createElement("button", {onClick: this.onClick}, 'Add unavailability for ', " ", this.props.day)
						)
					)
				));
	},
	onClick: function() {
		if (!this.state.clicked) {
			this.setState({clicked: true});
		} else {
			this.myRows.push(React.createElement(ChildDayTimeEntry, {key: this.props.day + this.state.childCounter + 1}));
			this.setState({childCounter: this.state.childCounter + 1});
		}

		setTimeout(function() {
			$('.datetimepicker').datetimepicker({
				format: 'LT'
			});
		}.bind(this), 100);
	}
});


var TimeEntry = React.createClass({displayName: "TimeEntry",
	getInitialState: function() {
		return {
			sunday: React.createElement(DayTimeEntry, {day: "Sunday"}),
			monday: React.createElement(DayTimeEntry, {day: "Monday"}),
			tuesday: React.createElement(DayTimeEntry, {day: "Tuesday"}),
			wednesday: React.createElement(DayTimeEntry, {day: "Wednesday"}),
			thursday: React.createElement(DayTimeEntry, {day: "Thursday"}),
			friday: React.createElement(DayTimeEntry, {day: "Friday"}),
			saturday: React.createElement(DayTimeEntry, {day: "Saturday"})
		};
	},
	render: function() {
		return (
		React.createElement("div", {className: "row"}, 
			React.createElement("ul", null, 
				React.createElement("li", {style: {clear: 'both'}}, 
					React.createElement("div", {style: {float: 'left'}}, "Sunday: "), 
					React.createElement("div", {className: "availability", style: {float: 'right'}}, this.state.sunday)
				), 
				React.createElement("li", {style: {clear: 'both'}}, 
					React.createElement("div", {style: {float: 'left'}}, "Monday: "), 
					React.createElement("div", {className: "availability", style: {float: 'right'}}, this.state.monday)
				), 
				React.createElement("li", {style: {clear: 'both'}}, 
					React.createElement("div", {style: {float: 'left'}}, "Tuesday: "), 
					React.createElement("div", {className: "availability", style: {float: 'right'}}, this.state.tuesday)
				), 
				React.createElement("li", {style: {clear: 'both'}}, 
					React.createElement("div", {style: {float: 'left'}}, "Wednesday: "), 
					React.createElement("div", {className: "availability", style: {float: 'right'}}, this.state.wednesday)
				), 
				React.createElement("li", {style: {clear: 'both'}}, 
					React.createElement("div", {style: {float: 'left'}}, "Thursday: "), 
					React.createElement("div", {className: "availability", style: {float: 'right'}}, this.state.thursday)
				), 
				React.createElement("li", {style: {clear: 'both'}}, 
					React.createElement("div", {style: {float: 'left'}}, "Friday: "), 
					React.createElement("div", {className: "availability", style: {float: 'right'}}, this.state.friday)
				), 
				React.createElement("li", {style: {clear: 'both'}}, 
					React.createElement("div", {style: {float: 'left'}}, "Saturday: "), 
					React.createElement("div", {className: "availability", style: {float: 'right'}}, this.state.saturday)
				)
			)
		)
		);
	}
});

module.exports = TimeEntry;

},{"react":"react"}]},{},["./app/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9BcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKTtcblJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCksIGRvY3VtZW50LmJvZHkpOyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuXG52YXIgQ2hpbGREYXlUaW1lRW50cnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQ2hpbGREYXlUaW1lRW50cnlcIixcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiXG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRhaW5lclwiLCBzdHlsZToge2Rpc3BsYXk6IHRoaXMucHJvcHMuZGlzcGxheX19LCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm93XCJ9LCBcblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtc20tNlwifSwgXG5cdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsIG51bGwsIFwiVW5hdmFpbGFibGUgZnJvbTpcIilcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpLCBcblxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1zbS02XCJ9LCBcblx0XHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7b25DbGljazogdGhpcy5kZWxldGVDbGlja30sIFwiRGVsZXRlXCIpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSwgXG5cblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm93XCJ9LCBcblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtc20tNlwifSwgXG5cdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCJ9LCBcblx0XHRcdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAgZGF0ZSBkYXRldGltZXBpY2tlclwifSwgXG5cdFx0XHRcdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCJ9KSwgXG5cdFx0XHRcdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImlucHV0LWdyb3VwLWFkZG9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImdseXBoaWNvbiBnbHlwaGljb24tdGltZVwifSlcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpLCBcblxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1zbS02XCJ9LCBcblx0XHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImJcIiwgbnVsbCwgXCJ0bzpcIilcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpLCBcblxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1zbS02XCJ9LCBcblx0XHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIn0sIFxuXHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbnB1dC1ncm91cCBkYXRlIGRhdGV0aW1lcGlja2VyXCJ9LCBcblx0XHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIn0pLCBcblx0XHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aW1lXCJ9KVxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSk7XG5cdH0sXG5cdGRlbGV0ZUNsaWNrOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnNldFByb3BzKHtkaXNwbGF5OiBcIm5vbmVcIn0pO1xuXHR9XG59KTtcblxudmFyIERheVRpbWVFbnRyeSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJEYXlUaW1lRW50cnlcIixcblx0bXlSb3dzOiBbUmVhY3QuY3JlYXRlRWxlbWVudChDaGlsZERheVRpbWVFbnRyeSwge2tleTogMH0pXSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xpY2tlZDogZmFsc2UsXG5cdFx0XHRjaGlsZENvdW50ZXI6IDFcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuY2xpY2tlZCkge1xuXHRcdFx0cmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZToge2JhY2tncm91bmRDb2xvcjogXCIjQzBDMEMwXCIsIHBhZGRpbmc6IFwiOHB4XCJ9LCBjbGFzc05hbWU6IFwiY29udGFpbmVyXCJ9LCBcblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsIG51bGwsIFwidGVzdCBcIiwgdGhpcy5wcm9wcy5uYW1lKSwgXG5cdFx0XHRcdFx0XHR0aGlzLm15Um93cywgXG5cblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLXNtLTZcIn0sIFxuXHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge29uQ2xpY2s6IHRoaXMub25DbGlja30sICdBZGQgbW9yZSB1bmF2YWlsYWJpbGl0eSBmb3IgJywgXCIgXCIsIHRoaXMucHJvcHMuZGF5KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHQpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7YmFja2dyb3VuZENvbG9yOiBcIiNDMEMwQzBcIiwgcGFkZGluZzogXCI4cHhcIn0sIGNsYXNzTmFtZTogXCJjb250YWluZXJcIn0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1zbS02XCJ9LCBcblx0XHRcdFx0XHRcdFx0XCJBdmFpbGFibGUgYWxsIGRheSAtIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtvbkNsaWNrOiB0aGlzLm9uQ2xpY2t9LCAnQWRkIHVuYXZhaWxhYmlsaXR5IGZvciAnLCBcIiBcIiwgdGhpcy5wcm9wcy5kYXkpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpKTtcblx0fSxcblx0b25DbGljazogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmNsaWNrZWQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2NsaWNrZWQ6IHRydWV9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5teVJvd3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KENoaWxkRGF5VGltZUVudHJ5LCB7a2V5OiB0aGlzLnByb3BzLmRheSArIHRoaXMuc3RhdGUuY2hpbGRDb3VudGVyICsgMX0pKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2NoaWxkQ291bnRlcjogdGhpcy5zdGF0ZS5jaGlsZENvdW50ZXIgKyAxfSk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5kYXRldGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcblx0XHRcdFx0Zm9ybWF0OiAnTFQnXG5cdFx0XHR9KTtcblx0XHR9LmJpbmQodGhpcyksIDEwMCk7XG5cdH1cbn0pO1xuXG5cbnZhciBUaW1lRW50cnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVGltZUVudHJ5XCIsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1bmRheTogUmVhY3QuY3JlYXRlRWxlbWVudChEYXlUaW1lRW50cnksIHtkYXk6IFwiU3VuZGF5XCJ9KSxcblx0XHRcdG1vbmRheTogUmVhY3QuY3JlYXRlRWxlbWVudChEYXlUaW1lRW50cnksIHtkYXk6IFwiTW9uZGF5XCJ9KSxcblx0XHRcdHR1ZXNkYXk6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF5VGltZUVudHJ5LCB7ZGF5OiBcIlR1ZXNkYXlcIn0pLFxuXHRcdFx0d2VkbmVzZGF5OiBSZWFjdC5jcmVhdGVFbGVtZW50KERheVRpbWVFbnRyeSwge2RheTogXCJXZWRuZXNkYXlcIn0pLFxuXHRcdFx0dGh1cnNkYXk6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF5VGltZUVudHJ5LCB7ZGF5OiBcIlRodXJzZGF5XCJ9KSxcblx0XHRcdGZyaWRheTogUmVhY3QuY3JlYXRlRWxlbWVudChEYXlUaW1lRW50cnksIHtkYXk6IFwiRnJpZGF5XCJ9KSxcblx0XHRcdHNhdHVyZGF5OiBSZWFjdC5jcmVhdGVFbGVtZW50KERheVRpbWVFbnRyeSwge2RheTogXCJTYXR1cmRheVwifSlcblx0XHR9O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7c3R5bGU6IHtjbGVhcjogJ2JvdGgnfX0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7ZmxvYXQ6ICdsZWZ0J319LCBcIlN1bmRheTogXCIpLCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHN0eWxlOiB7ZmxvYXQ6ICdyaWdodCd9fSwgdGhpcy5zdGF0ZS5zdW5kYXkpXG5cdFx0XHRcdCksIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge3N0eWxlOiB7Y2xlYXI6ICdib3RoJ319LCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZToge2Zsb2F0OiAnbGVmdCd9fSwgXCJNb25kYXk6IFwiKSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImF2YWlsYWJpbGl0eVwiLCBzdHlsZToge2Zsb2F0OiAncmlnaHQnfX0sIHRoaXMuc3RhdGUubW9uZGF5KVxuXHRcdFx0XHQpLCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtzdHlsZToge2NsZWFyOiAnYm90aCd9fSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHtmbG9hdDogJ2xlZnQnfX0sIFwiVHVlc2RheTogXCIpLCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHN0eWxlOiB7ZmxvYXQ6ICdyaWdodCd9fSwgdGhpcy5zdGF0ZS50dWVzZGF5KVxuXHRcdFx0XHQpLCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtzdHlsZToge2NsZWFyOiAnYm90aCd9fSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHtmbG9hdDogJ2xlZnQnfX0sIFwiV2VkbmVzZGF5OiBcIiksIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdmFpbGFiaWxpdHlcIiwgc3R5bGU6IHtmbG9hdDogJ3JpZ2h0J319LCB0aGlzLnN0YXRlLndlZG5lc2RheSlcblx0XHRcdFx0KSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7c3R5bGU6IHtjbGVhcjogJ2JvdGgnfX0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7ZmxvYXQ6ICdsZWZ0J319LCBcIlRodXJzZGF5OiBcIiksIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdmFpbGFiaWxpdHlcIiwgc3R5bGU6IHtmbG9hdDogJ3JpZ2h0J319LCB0aGlzLnN0YXRlLnRodXJzZGF5KVxuXHRcdFx0XHQpLCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtzdHlsZToge2NsZWFyOiAnYm90aCd9fSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHtmbG9hdDogJ2xlZnQnfX0sIFwiRnJpZGF5OiBcIiksIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdmFpbGFiaWxpdHlcIiwgc3R5bGU6IHtmbG9hdDogJ3JpZ2h0J319LCB0aGlzLnN0YXRlLmZyaWRheSlcblx0XHRcdFx0KSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7c3R5bGU6IHtjbGVhcjogJ2JvdGgnfX0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7ZmxvYXQ6ICdsZWZ0J319LCBcIlNhdHVyZGF5OiBcIiksIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdmFpbGFiaWxpdHlcIiwgc3R5bGU6IHtmbG9hdDogJ3JpZ2h0J319LCB0aGlzLnN0YXRlLnNhdHVyZGF5KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVFbnRyeTtcbiJdfQ==
