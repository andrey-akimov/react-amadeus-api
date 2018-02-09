import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../../store/actions';

class Form extends Component {
	state = {
		airport: 'ODS',
		from: null,
		to: null,
		currency: 'USD',
		radius: 10,
		maxPrice: 250
	}

	airportHandler = airport => {
		this.setState({airport});
	}

	fromDateHandler = from => {
		this.setState({from});
	}

	toDateHandler = to => {
		this.setState({to});
	}

	currencyHandler = currency => {
		this.setState({currency});
	}

	radiusHandler = radius => {
		this.setState({radius});
	}

	maxPriceHandler = maxPrice => {
		this.setState({maxPrice});
	}

	getRequest = () => {
		const key = 'P5fJmQPZtRB9ebjzbloTHzZcipxAqdaV';
		const {
			airport,
			from,
			to,
			currency,
			radius,
			maxPrice
		} = this.state;

		axios
			.get(
				`https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?` +
					`apikey=${key}` +
					`&location=${airport}` +
					`&check_in=${from}` +
					`&check_out=${to}` +
					`&radius=${radius}` +
					`&currency=${currency}` +
					`&max_rate=${maxPrice}` +
					`&number_of_results=99`

				// "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=P5fJmQPZtRB9ebjzbloTHzZcipxAqdaV&location=KBP&check_in=2018-02-08&check_out=2018-02-09&radius=40&lang=EN&currency=USD&number_of_results=80&all_rooms=false&show_sold_out=false"
			)
			.then(res => {
				
				const filteredHotels = res.data.results.filter(hotel => {
					return (hotel.total_price.amount <= this.state.maxPrice) ? true : false;
				})
				this.props.dispatch(action.getHotels(filteredHotels))
			}
			)
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
							onClick={() =>
								this.airportHandler('ODS')
							}
							primaryText="Odessa"
						/>
						<MenuItem
							value="KBP"
							onClick={() =>
								this.airportHandler('KBP')
							}
							primaryText="Kiev"
						/>
						<MenuItem
							value="LWO"
							onClick={() =>
								this.airportHandler('LWO')
							}
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
							onClick={() =>
								this.currencyHandler('USD')
							}
						/>
						<MenuItem
							value="EUR"
							primaryText="EUR"
							onClick={() =>
								this.currencyHandler('EUR')
							}
						/>
						<MenuItem
							value="UAH"
							primaryText="UAH"
							onClick={() =>
								this.currencyHandler('UAH')
							}
						/>
					</DropDownMenu>

					<DropDownMenu
						value={this.state.radius}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value={10}
							onClick={() =>
								this.radiusHandler(10)
							}
							primaryText="10 km"
						/>
						<MenuItem
							value={25}
							onClick={() =>
								this.radiusHandler(25)
							}
							primaryText="25 km"
						/>
						<MenuItem
							value={40}
							onClick={() =>
								this.radiusHandler(40)
							}
							primaryText="40 km"
						/>
					</DropDownMenu>

					<DropDownMenu
						value={this.state.maxPrice}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value={100}
							onClick={() =>
								this.maxPriceHandler(100)
							}
							primaryText={`100 ${
								this.state.currency
							}`}
						/>
						<MenuItem
							value={250}
							onClick={() =>
								this.maxPriceHandler(250)
							}
							primaryText={`250 ${
								this.state.currency
							}`}
						/>
						<MenuItem
							value={600}
							onClick={() =>
								this.maxPriceHandler(600)
							}
							primaryText={`600 ${
								this.state.currency
							}`}
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

const mapStateToProps = state => state;

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(mapStateToProps)(Form);
