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
		currency: 'USD',
		radius: 10
	};

	airportHandler = airport => {
		this.setState({ airport });
	};

	fromDateHandler = from => {
		this.setState({ from });
	};

	toDateHandler = to => {
		this.setState({ to });
	};

	currencyHandler = currency => {
		this.setState({ currency });
	};

	radiusHandler = radius => {
		this.setState({ radius });
	};

	getRequest = () => {
		console.log(this.state);

		const key = 'P5fJmQPZtRB9ebjzbloTHzZcipxAqdaV';
		const { airport, from, to, currency, radius } = this.state;
		axios
			.get(
				`https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?
				apikey=${key}
				&location=${airport}
				&check_in=${from}
				&check_out=${to}
				&radius=${radius}
				&currency=${currency}
				&all_rooms=true
				&number_of_results=10`
			)
			.then(res => console.log(res.data.results))
			.catch(error => console.log(error));
	};

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

					<DatePicker
						hintText="From"
						ref="from"
						onChange={() =>
							this.fromDateHandler(
								this.refs.from.refs.input.props.value
							)
						}
					/>

					<DatePicker
						hintText="To"
						ref="to"
						onChange={() =>
							this.toDateHandler(
								this.refs.to.refs.input.props.value
							)
						}
					/>

					<DropDownMenu
						value={this.state.currency}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value="USD"
							primaryText="USD"
							onClick={() => this.currencyHandler('USD')}
						/>
						<MenuItem
							value="EUR"
							primaryText="EUR"
							onClick={() => this.currencyHandler('EUR')}
						/>
						<MenuItem
							value="UAH"
							primaryText="UAH"
							onClick={() => this.currencyHandler('UAH')}
						/>
					</DropDownMenu>

					<DropDownMenu
						value={this.state.radius}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value={10}
							onClick={() => this.radiusHandler(10)}
							primaryText="10 km"
						/>
						<MenuItem
							value={25}
							onClick={() => this.radiusHandler(25)}
							primaryText="25 km"
						/>
						<MenuItem
							value={40}
							onClick={() => this.radiusHandler(40)}
							primaryText="40 km"
						/>
					</DropDownMenu>

					<RaisedButton
						label="FIND"
						primary={true}
						style={styles.btn}
						onClick={this.getRequest}
					/>
				</div>
			</div>
		);
	}
}

export default Form;
