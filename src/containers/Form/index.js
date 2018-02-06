import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../../store/actions';

class Form extends Component {
	getRequest = () => {
		const key = 'P5fJmQPZtRB9ebjzbloTHzZcipxAqdaV';
		const { airport, from, to, currency, radius } = this.props.formOptions;
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
				&number_of_results=99`
			)
			.then(res =>
				this.props.dispatch(action.getHotels(res.data.results))
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
						value={this.props.formOptions.airport}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value="ODS"
							onClick={() =>
								this.props.dispatch(action.chooseAirport('ODS'))
							}
							primaryText="Odessa"
						/>
						<MenuItem
							value="KBP"
							onClick={() =>
								this.props.dispatch(action.chooseAirport('KBP'))
							}
							primaryText="Kiev"
						/>
						<MenuItem
							value="LWO"
							onClick={() =>
								this.props.dispatch(action.chooseAirport('LWO'))
							}
							primaryText="Lviv"
						/>
					</DropDownMenu>

					<DatePicker
						hintText="From"
						ref="from"
						onChange={() =>
							this.props.dispatch(
								action.chooseFromDate(
									this.refs.from.refs.input.props.value
								)
							)
						}
					/>

					<DatePicker
						hintText="To"
						ref="to"
						onChange={() =>
							this.props.dispatch(
								action.chooseToDate(
									this.refs.to.refs.input.props.value
								)
							)
						}
					/>

					<DropDownMenu
						value={this.props.formOptions.currency}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value="USD"
							primaryText="USD"
							onClick={() =>
								this.props.dispatch(
									action.chooseCurrency('USD')
								)
							}
						/>
						<MenuItem
							value="EUR"
							primaryText="EUR"
							onClick={() =>
								this.props.dispatch(
									action.chooseCurrency('EUR')
								)
							}
						/>
						<MenuItem
							value="UAH"
							primaryText="UAH"
							onClick={() =>
								this.props.dispatch(
									action.chooseCurrency('UAH')
								)
							}
						/>
					</DropDownMenu>

					<DropDownMenu
						value={this.props.formOptions.radius}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value={10}
							onClick={() =>
								this.props.dispatch(action.chooseRadius(10))
							}
							primaryText="10 km"
						/>
						<MenuItem
							value={25}
							onClick={() =>
								this.props.dispatch(action.chooseRadius(25))
							}
							primaryText="25 km"
						/>
						<MenuItem
							value={40}
							onClick={() =>
								this.props.dispatch(action.chooseRadius(40))
							}
							primaryText="40 km"
						/>
					</DropDownMenu>

					<DropDownMenu
						value={this.props.formOptions.maxPrice}
						style={styles.menu}
						autoWidth={false}
					>
						<MenuItem
							value={50}
							onClick={() =>
								this.props.dispatch(action.chooseMaxPrice(50))
							}
							primaryText={`50 ${
								this.props.formOptions.currency
							}`}
						/>
						<MenuItem
							value={150}
							onClick={() =>
								this.props.dispatch(action.chooseMaxPrice(150))
							}
							primaryText={`150 ${
								this.props.formOptions.currency
							}`}
						/>
						<MenuItem
							value={400}
							onClick={() =>
								this.props.dispatch(action.chooseMaxPrice(400))
							}
							primaryText={`400 ${
								this.props.formOptions.currency
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

const mapStateToProps = state => ({
	formOptions: state.formOptions
});

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(mapStateToProps)(Form);
