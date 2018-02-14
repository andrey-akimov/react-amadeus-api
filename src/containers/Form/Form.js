import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import * as action from '../../store/actions';
import './style.css'

class Form extends Component {
	state = {
		snackbarOpen: false,
		airport: 'ODS',
		from: null,
		to: null,
		currency: 'USD',
		radius: 10,
		maxPrice: 250
	}

	handleRequestClose = () => {
		this.setState({ snackbarOpen: false });
	}
	
	airportHandler = (airport) => {
		this.setState({ airport });
	}

	fromDateHandler = (from) => {
		this.setState({ from });
	}

	toDateHandler = (to) => {
		this.setState({ to });
	}

	currencyHandler = (currency) => {
		this.setState({ currency });
	}

	radiusHandler = (radius) => {
		this.setState({ radius });
	}

	maxPriceHandler = (maxPrice) => {
		this.setState({ maxPrice });
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
		const date = new Date();
		const dateFrom = new Date(from);
		const dateTo = new Date(to);

		// Form validation
		if(
			(dateFrom.getDate() >= date.getDate()) && (dateFrom.getMonth() >= date.getMonth()) &&
			(dateTo.getDate() >= dateFrom.getDate()) && (dateTo.getMonth() >= dateFrom.getMonth())
		){
			this.props.dispatch(action.loading());
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
				)
				.then(res => {
					const filteredDada = res.data.results.filter(hotel => {
						return (hotel.total_price.amount <= this.state.maxPrice) ? true : false;
					});
					this.props.dispatch(action.getHotels(filteredDada));
				})
				.catch(error => console.log(error));
		} else {
			this.setState({snackbarOpen: true});
		}
	};

	render() {
		return (
			<div className="form">
				<div className="container">
					<DropDownMenu
						className="form__drop-down"
						value={this.state.airport}
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

					<DropDownMenu
						className="form__drop-down"
						value={this.state.radius}
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

					<DatePicker
						className="form__date-piker"
						hintText="From"
						ref="from"
						onChange={() =>
							this.fromDateHandler(this.refs.from.refs.input.props.value)
						}
					/>

					<DatePicker
						className="form__date-piker"
						hintText="To"
						ref="to"
						onChange={() =>
							this.toDateHandler(this.refs.to.refs.input.props.value)
						}
					/>

					<DropDownMenu
						className="form__drop-down"
						value={this.state.maxPrice}
						autoWidth={false}
					>
						<MenuItem
							value={100}
							onClick={() => this.maxPriceHandler(100)}
							primaryText={`100 ${this.state.currency}`}
						/>
						<MenuItem
							value={250}
							onClick={() => this.maxPriceHandler(250)}
							primaryText={`250 ${this.state.currency}`}
						/>
						<MenuItem
							value={600}
							onClick={() => this.maxPriceHandler(600)}
							primaryText={`600 ${this.state.currency}`}
						/>
					</DropDownMenu>

					<DropDownMenu
						className="form__drop-down"
						value={this.state.currency}
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

					<RaisedButton
						className="search-button"
						label="FIND"
						primary={true}
						onClick={this.getRequest}
					/>
					
					<Snackbar
						className="snackbar"
						open={this.state.snackbarOpen}
						message="Entered date is not correct. Please check the form."
						autoHideDuration={4000}
						onRequestClose={this.handleRequestClose}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Form);
