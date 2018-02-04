import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class Form extends Component {
	state = {
		airport: 'ODS',
		from: null,
		to: null,
		people: 2,
		radius: 5
	};

	// CDU
	componentDidUpdate(prevProps, prevState) {
		console.log(this.state);

		const key = 'P5fJmQPZtRB9ebjzbloTHzZcipxAqdaV';
		const { airport, from, to } = this.state;
		axios
			.get(
				`https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?
				apikey=${key}
				&location=${airport}
				&check_in=${from}
				&check_out=${to}
				&number_of_results=10`
			)
			.then(res => console.log(res.data.results))
			.catch(error => console.log(error));
	}

	airportHandler = airport => {
		this.setState({ airport });
	};

	peopleHandler = people => {
		this.setState({ people });
	};

	radiusHandler = radius => {
		this.setState({ radius });
	};

	dateHandler = (from, to) => {
		this.setState({
			from,
			to
		});
	};

	// componentDidMount() {
	// 	const key = 'P5fJmQPZtRB9ebjzbloTHzZcipxAqdaV';
	// 	const location = this.state.airport;
	// 	const from = this.state.from;
	// 	const to = this.state.to;
	// 	axios
	// 		.get(
	// 			`https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?
	// 			apikey=${key}
	// 			&location=${location}
	// 			&check_in=${from}
	// 			&check_out=${to}
	// 			&number_of_results=10`
	// 		)
	// 		.then(res => console.log(res.data.results))
	// 		.catch(error => console.log(error));
	// }

	render() {
		const styles = {
			menu: {
				width: '150px'
			},
			btn: {
				margin: 12
			}
		};

		return (
			<div className="form">
				<div className="container">
					<DropDownMenu
						value={this.state.airport}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value="ODS"
							onClick={() => this.airportHandler('ODS')}
							primaryText="Odessa"
						/>
						<MenuItem
							value="KBP"
							onClick={() => this.airportHandler('KBP')}
							primaryText="Kiev"
						/>
						<MenuItem
							value="LWO"
							onClick={() => this.airportHandler('LWO')}
							primaryText="Lviv"
						/>
					</DropDownMenu>

					<DatePicker hintText="From" ref="from" />

					<DatePicker hintText="To" ref="to" />

					<DropDownMenu
						value={this.state.people}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value={1}
							onClick={() => this.peopleHandler(1)}
							primaryText="1"
						/>
						<MenuItem
							value={2}
							onClick={() => this.peopleHandler(2)}
							primaryText="2"
						/>
						<MenuItem
							value={3}
							onClick={() => this.peopleHandler(3)}
							primaryText="3"
						/>
						<MenuItem
							value={4}
							onClick={() => this.peopleHandler(4)}
							primaryText="4"
						/>
						<MenuItem
							value={5}
							onClick={() => this.peopleHandler(5)}
							primaryText="5"
						/>
						<MenuItem
							value={6}
							onClick={() => this.peopleHandler(6)}
							primaryText="6"
						/>
					</DropDownMenu>

					<DropDownMenu
						value={this.state.radius}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value={5}
							onClick={() => this.radiusHandler(5)}
							primaryText="5 km"
						/>
						<MenuItem
							value={15}
							onClick={() => this.radiusHandler(15)}
							primaryText="15 km"
						/>
						<MenuItem
							value={25}
							onClick={() => this.radiusHandler(25)}
							primaryText="25 km"
						/>
					</DropDownMenu>

					<RaisedButton
						label="FIND"
						primary={true}
						style={styles.btn}
						onClick={() =>
							this.dateHandler(
								this.refs.from.refs.input.props.value,
								this.refs.to.refs.input.props.value
							)
						}
					/>
				</div>
			</div>
		);
	}
}

export default Form;
