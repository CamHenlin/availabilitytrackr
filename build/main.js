(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.body);
},{"./App.js":"/Users/camh/Documents/availabilitytrackr/app/App.js","react":"react"}],"/Users/camh/Documents/availabilitytrackr/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');


var ChildDayTimeEntry = React.createClass({displayName: "ChildDayTimeEntry",
	getInitialState: function() {
		return {
			display: "block",
			startValue: null,
			endValue: null
		}
	},
	render: function() {
		return (React.createElement("div", {className: "container", style: {display: this.state.display, border: "1px black solid"}}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("button", {onClick: this.deleteClick}, "Remove")
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("button", {onClick: this.setUnavailableAllDayClick}, "Unavailable all day")
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("b", null, "Unavailable from ", this.props.day, " at")
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("div", {className: "form-group"}, 
								React.createElement("div", {className: "input-group date datetimepicker"}, 
									React.createElement("input", {type: "text", value: this.state.startValue, onChange: this.handleStartChange, className: "form-control"}), 
									React.createElement("span", {className: "input-group-addon"}, React.createElement("span", {className: "glyphicon glyphicon-time"})
									)
								)
							)
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("b", null, "Until ", this.props.day, " at")
						)
					), 

					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-sm-6"}, 
							React.createElement("div", {className: "form-group"}, 
								React.createElement("div", {className: "input-group date datetimepicker"}, 
									React.createElement("input", {type: "text", value: this.state.endValue, onChange: this.handleEndChange, className: "form-control"}), 
									React.createElement("span", {className: "input-group-addon"}, React.createElement("span", {className: "glyphicon glyphicon-time"})
									)
								)
							)
						)
					)
				));
	},
	deleteClick: function() {
		this.setState({display: "none"});
	},
	setUnavailableAllDayClick: function() {

	},
	handleStartChange: function(event) {
		event.target.value
	},
	handleEndChange: function(event) {
		event.target.value
	}
});

var DayTimeEntry = React.createClass({displayName: "DayTimeEntry",
	getInitialState: function() {
		return {
			myRows: [React.createElement(ChildDayTimeEntry, {day: this.props.day, key: this.props.day + "1"})],
			clicked: false,
			childCounter: 1
		}
	},
	render: function() {
		if (this.state.clicked) {
			return (React.createElement("div", {style: {backgroundColor: "#C0C0C0", padding: "8px"}, className: "container"}, 
						React.createElement("b", null, "Nonavailability for ", this.props.day), 
						this.state.myRows, 

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
			console.log(this.props.day + parseInt(parseInt(this.state.childCounter) + 1));
			this.state.myRows.push(React.createElement(ChildDayTimeEntry, {day: this.props.day, key: this.props.day + parseInt(parseInt(this.state.childCounter) + 1)}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9BcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKTtcblJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCksIGRvY3VtZW50LmJvZHkpOyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuXG52YXIgQ2hpbGREYXlUaW1lRW50cnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQ2hpbGREYXlUaW1lRW50cnlcIixcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxuXHRcdFx0c3RhcnRWYWx1ZTogbnVsbCxcblx0XHRcdGVuZFZhbHVlOiBudWxsXG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRhaW5lclwiLCBzdHlsZToge2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSwgYm9yZGVyOiBcIjFweCBibGFjayBzb2xpZFwifX0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1zbS02XCJ9LCBcblx0XHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7b25DbGljazogdGhpcy5kZWxldGVDbGlja30sIFwiUmVtb3ZlXCIpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSwgXG5cblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm93XCJ9LCBcblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtc20tNlwifSwgXG5cdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge29uQ2xpY2s6IHRoaXMuc2V0VW5hdmFpbGFibGVBbGxEYXlDbGlja30sIFwiVW5hdmFpbGFibGUgYWxsIGRheVwiKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCksIFxuXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLXNtLTZcIn0sIFxuXHRcdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYlwiLCBudWxsLCBcIlVuYXZhaWxhYmxlIGZyb20gXCIsIHRoaXMucHJvcHMuZGF5LCBcIiBhdFwiKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCksIFxuXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLXNtLTZcIn0sIFxuXHRcdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwifSwgXG5cdFx0XHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImlucHV0LWdyb3VwIGRhdGUgZGF0ZXRpbWVwaWNrZXJcIn0sIFxuXHRcdFx0XHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgdmFsdWU6IHRoaXMuc3RhdGUuc3RhcnRWYWx1ZSwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlU3RhcnRDaGFuZ2UsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIn0pLCBcblx0XHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aW1lXCJ9KVxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCksIFxuXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLXNtLTZcIn0sIFxuXHRcdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYlwiLCBudWxsLCBcIlVudGlsIFwiLCB0aGlzLnByb3BzLmRheSwgXCIgYXRcIilcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpLCBcblxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1zbS02XCJ9LCBcblx0XHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIn0sIFxuXHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbnB1dC1ncm91cCBkYXRlIGRhdGV0aW1lcGlja2VyXCJ9LCBcblx0XHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnN0YXRlLmVuZFZhbHVlLCBvbkNoYW5nZTogdGhpcy5oYW5kbGVFbmRDaGFuZ2UsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIn0pLCBcblx0XHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aW1lXCJ9KVxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSk7XG5cdH0sXG5cdGRlbGV0ZUNsaWNrOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiBcIm5vbmVcIn0pO1xuXHR9LFxuXHRzZXRVbmF2YWlsYWJsZUFsbERheUNsaWNrOiBmdW5jdGlvbigpIHtcblxuXHR9LFxuXHRoYW5kbGVTdGFydENoYW5nZTogZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC50YXJnZXQudmFsdWVcblx0fSxcblx0aGFuZGxlRW5kQ2hhbmdlOiBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnRhcmdldC52YWx1ZVxuXHR9XG59KTtcblxudmFyIERheVRpbWVFbnRyeSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJEYXlUaW1lRW50cnlcIixcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bXlSb3dzOiBbUmVhY3QuY3JlYXRlRWxlbWVudChDaGlsZERheVRpbWVFbnRyeSwge2RheTogdGhpcy5wcm9wcy5kYXksIGtleTogdGhpcy5wcm9wcy5kYXkgKyBcIjFcIn0pXSxcblx0XHRcdGNsaWNrZWQ6IGZhbHNlLFxuXHRcdFx0Y2hpbGRDb3VudGVyOiAxXG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmNsaWNrZWQpIHtcblx0XHRcdHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHtiYWNrZ3JvdW5kQ29sb3I6IFwiI0MwQzBDMFwiLCBwYWRkaW5nOiBcIjhweFwifSwgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwifSwgXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYlwiLCBudWxsLCBcIk5vbmF2YWlsYWJpbGl0eSBmb3IgXCIsIHRoaXMucHJvcHMuZGF5KSwgXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm15Um93cywgXG5cblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLXNtLTZcIn0sIFxuXHRcdFx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge29uQ2xpY2s6IHRoaXMub25DbGlja30sICdBZGQgbW9yZSB1bmF2YWlsYWJpbGl0eSBmb3IgJywgXCIgXCIsIHRoaXMucHJvcHMuZGF5KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHQpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7YmFja2dyb3VuZENvbG9yOiBcIiNDMEMwQzBcIiwgcGFkZGluZzogXCI4cHhcIn0sIGNsYXNzTmFtZTogXCJjb250YWluZXJcIn0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1zbS02XCJ9LCBcblx0XHRcdFx0XHRcdFx0XCJBdmFpbGFibGUgYWxsIGRheSAtIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtvbkNsaWNrOiB0aGlzLm9uQ2xpY2t9LCAnQWRkIHVuYXZhaWxhYmlsaXR5IGZvciAnLCBcIiBcIiwgdGhpcy5wcm9wcy5kYXkpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpKTtcblx0fSxcblx0b25DbGljazogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmNsaWNrZWQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2NsaWNrZWQ6IHRydWV9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5kYXkgKyBwYXJzZUludChwYXJzZUludCh0aGlzLnN0YXRlLmNoaWxkQ291bnRlcikgKyAxKSk7XG5cdFx0XHR0aGlzLnN0YXRlLm15Um93cy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hpbGREYXlUaW1lRW50cnksIHtkYXk6IHRoaXMucHJvcHMuZGF5LCBrZXk6IHRoaXMucHJvcHMuZGF5ICsgcGFyc2VJbnQocGFyc2VJbnQodGhpcy5zdGF0ZS5jaGlsZENvdW50ZXIpICsgMSl9KSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtjaGlsZENvdW50ZXI6IHRoaXMuc3RhdGUuY2hpbGRDb3VudGVyICsgMX0pO1xuXHRcdH1cblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuZGF0ZXRpbWVwaWNrZXInKS5kYXRldGltZXBpY2tlcih7XG5cdFx0XHRcdGZvcm1hdDogJ0xUJ1xuXHRcdFx0fSk7XG5cdFx0fS5iaW5kKHRoaXMpLCAxMDApO1xuXHR9XG59KTtcblxuXG52YXIgVGltZUVudHJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRpbWVFbnRyeVwiLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdW5kYXk6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF5VGltZUVudHJ5LCB7ZGF5OiBcIlN1bmRheVwifSksXG5cdFx0XHRtb25kYXk6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF5VGltZUVudHJ5LCB7ZGF5OiBcIk1vbmRheVwifSksXG5cdFx0XHR0dWVzZGF5OiBSZWFjdC5jcmVhdGVFbGVtZW50KERheVRpbWVFbnRyeSwge2RheTogXCJUdWVzZGF5XCJ9KSxcblx0XHRcdHdlZG5lc2RheTogUmVhY3QuY3JlYXRlRWxlbWVudChEYXlUaW1lRW50cnksIHtkYXk6IFwiV2VkbmVzZGF5XCJ9KSxcblx0XHRcdHRodXJzZGF5OiBSZWFjdC5jcmVhdGVFbGVtZW50KERheVRpbWVFbnRyeSwge2RheTogXCJUaHVyc2RheVwifSksXG5cdFx0XHRmcmlkYXk6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF5VGltZUVudHJ5LCB7ZGF5OiBcIkZyaWRheVwifSksXG5cdFx0XHRzYXR1cmRheTogUmVhY3QuY3JlYXRlRWxlbWVudChEYXlUaW1lRW50cnksIHtkYXk6IFwiU2F0dXJkYXlcIn0pXG5cdFx0fTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyb3dcIn0sIFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge3N0eWxlOiB7Y2xlYXI6ICdib3RoJ319LCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZToge2Zsb2F0OiAnbGVmdCd9fSwgXCJTdW5kYXk6IFwiKSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImF2YWlsYWJpbGl0eVwiLCBzdHlsZToge2Zsb2F0OiAncmlnaHQnfX0sIHRoaXMuc3RhdGUuc3VuZGF5KVxuXHRcdFx0XHQpLCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtzdHlsZToge2NsZWFyOiAnYm90aCd9fSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHtmbG9hdDogJ2xlZnQnfX0sIFwiTW9uZGF5OiBcIiksIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdmFpbGFiaWxpdHlcIiwgc3R5bGU6IHtmbG9hdDogJ3JpZ2h0J319LCB0aGlzLnN0YXRlLm1vbmRheSlcblx0XHRcdFx0KSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7c3R5bGU6IHtjbGVhcjogJ2JvdGgnfX0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7ZmxvYXQ6ICdsZWZ0J319LCBcIlR1ZXNkYXk6IFwiKSwgXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImF2YWlsYWJpbGl0eVwiLCBzdHlsZToge2Zsb2F0OiAncmlnaHQnfX0sIHRoaXMuc3RhdGUudHVlc2RheSlcblx0XHRcdFx0KSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7c3R5bGU6IHtjbGVhcjogJ2JvdGgnfX0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7ZmxvYXQ6ICdsZWZ0J319LCBcIldlZG5lc2RheTogXCIpLCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHN0eWxlOiB7ZmxvYXQ6ICdyaWdodCd9fSwgdGhpcy5zdGF0ZS53ZWRuZXNkYXkpXG5cdFx0XHRcdCksIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge3N0eWxlOiB7Y2xlYXI6ICdib3RoJ319LCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZToge2Zsb2F0OiAnbGVmdCd9fSwgXCJUaHVyc2RheTogXCIpLCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHN0eWxlOiB7ZmxvYXQ6ICdyaWdodCd9fSwgdGhpcy5zdGF0ZS50aHVyc2RheSlcblx0XHRcdFx0KSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7c3R5bGU6IHtjbGVhcjogJ2JvdGgnfX0sIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7ZmxvYXQ6ICdsZWZ0J319LCBcIkZyaWRheTogXCIpLCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHN0eWxlOiB7ZmxvYXQ6ICdyaWdodCd9fSwgdGhpcy5zdGF0ZS5mcmlkYXkpXG5cdFx0XHRcdCksIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge3N0eWxlOiB7Y2xlYXI6ICdib3RoJ319LCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZToge2Zsb2F0OiAnbGVmdCd9fSwgXCJTYXR1cmRheTogXCIpLCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXZhaWxhYmlsaXR5XCIsIHN0eWxlOiB7ZmxvYXQ6ICdyaWdodCd9fSwgdGhpcy5zdGF0ZS5zYXR1cmRheSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lRW50cnk7XG4iXX0=
