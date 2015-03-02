/** @jsx React.DOM */
var React = require('react');


var ChildDayTimeEntry = React.createClass({
	render: function() {
		if (this.state.clicked) {
			return (<div style={{backgroundColor: "#C0C0C0", padding: "8px"}} className="container">
						<div className="row">
							<div className='col-sm-6'>
								<b>Unavailable from:</b>
							</div>
						</div>

						<div className="row">
							<div className='col-sm-6'>
								<div className="form-group">
									<div className='input-group date datetimepicker'>
										<input type='text' className="form-control" />
										<span className="input-group-addon"><span className="glyphicon glyphicon-time"></span>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className='col-sm-6'>
								<b>to:</b>
							</div>
						</div>

						<div className="row">
							<div className='col-sm-6'>
								<div className="form-group">
									<div className='input-group date datetimepicker'>
										<input type='text' className="form-control" />
										<span className="input-group-addon"><span className="glyphicon glyphicon-time"></span>
										</span>
									</div>
								</div>
							</div>
						</div>

					</div>);
		}
	}
});

var DayTimeEntry = React.createClass({
	getInitialState: function() {
		return {
			clicked: false,
			children: ['test']
		}
	},
	render: function() {
		if (this.state.clicked) {
			return (<div style={{backgroundColor: "#C0C0C0", padding: "8px"}} className="container">
						<div className="row">
							<div className='col-sm-6'>
								<b>Unavailable from:</b>
							</div>
						</div>

						<div className="row">
							<div className='col-sm-6'>
								<div className="form-group">
									<div className='input-group date datetimepicker'>
										<input type='text' className="form-control" />
										<span className="input-group-addon"><span className="glyphicon glyphicon-time"></span>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className='col-sm-6'>
								<b>to:</b>
							</div>
						</div>

						<div className="row">
							<div className='col-sm-6'>
								<div className="form-group">
									<div className='input-group date datetimepicker'>
										<input type='text' className="form-control" />
										<span className="input-group-addon"><span className="glyphicon glyphicon-time"></span>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className='col-sm-6'>
								<button onClick={this.onClick}>{'Add more unavailability for '} {this.props.day}</button>
							</div>
						</div>

					</div>);
		}

		return (<div style={{backgroundColor: "#C0C0C0", padding: "8px"}} className="container">
					<div className="row">
						<div className='col-sm-6'>
							Available all day - <button onClick={this.onClick}>{'Add unavailability for '} {this.props.day}</button>
						</div>
					</div>
				</div>);
	},
	onClick: function() {
		if (!this.state.clicked) {
			this.setState({clicked: true});
			setTimeout(function() {
				$('.datetimepicker').datetimepicker({
					format: 'LT'
				});
			}.bind(this), 100);
			return;
		}

		alert(this.state.children[0]);
	}
});


var TimeEntry = React.createClass({
	getInitialState: function() {
		return {
			sunday: <DayTimeEntry day="Sunday" />,
			monday: <DayTimeEntry day="Monday" />,
			tuesday: <DayTimeEntry day="Tuesday" />,
			wednesday: <DayTimeEntry day="Wednesday" />,
			thursday: <DayTimeEntry day="Thursday" />,
			friday: <DayTimeEntry day="Friday" />,
			saturday: <DayTimeEntry day="Saturday" />
		};
	},
	render: function() {
		return (
		<div className="row">
			<ul>
				<li style={{clear: 'both'}}>
					<div style={{float: 'left'}}>Sunday: </div>
					<div className="availability" style={{float: 'right'}}>{this.state.sunday}</div>
				</li>
				<li style={{clear: 'both'}}>
					<div style={{float: 'left'}}>Monday: </div>
					<div className="availability" style={{float: 'right'}}>{this.state.monday}</div>
				</li>
				<li style={{clear: 'both'}}>
					<div style={{float: 'left'}}>Tuesday: </div>
					<div className="availability" style={{float: 'right'}}>{this.state.tuesday}</div>
				</li>
				<li style={{clear: 'both'}}>
					<div style={{float: 'left'}}>Wednesday: </div>
					<div className="availability" style={{float: 'right'}}>{this.state.wednesday}</div>
				</li>
				<li style={{clear: 'both'}}>
					<div style={{float: 'left'}}>Thursday: </div>
					<div className="availability" style={{float: 'right'}}>{this.state.thursday}</div>
				</li>
				<li style={{clear: 'both'}}>
					<div style={{float: 'left'}}>Friday: </div>
					<div className="availability" style={{float: 'right'}}>{this.state.friday}</div>
				</li>
				<li style={{clear: 'both'}}>
					<div style={{float: 'left'}}>Saturday: </div>
					<div className="availability" style={{float: 'right'}}>{this.state.saturday}</div>
				</li>
			</ul>
		</div>
		);
	}
});

module.exports = TimeEntry;
