import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Form from '../Form';
import './App.css';
import { connect } from 'react-redux';
import * as _ from 'lodash';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<Header />
					<Menu />
					<Form />
					{this.props.hotels !== null
						? this.props.hotels.map(
								hotel => (
									<div key={hotel.property_code}>
										{/* IMG */}
										<img
											src="http://fakeimg.pl/350x200/ff0000/000"
											alt="photos"
										/>
										{/* NAME AND ADDRESS */}

										<h2>
											{hotel.property_name},&nbsp;
											<a href="/">
												{hotel.address.line1}
											</a>
										</h2>

										{/* CONTACTS */}
										<p>
											{_.uniq(hotel.contacts).map(
												contact => (
													<span key={_.uniqueId()}>
														{contact.detail}
													</span>
												)
											)}
										</p>

										{/* DESCRIPTION */}
										<p>
											{hotel.amenities.map(amenity => (
												<span key={_.uniqueId()}>
													{amenity.description}
												</span>
											))}
										</p>

										{/* ROOMS FOR RENT */}
										<p>
											{hotel.rooms.map(room => (
												<span key={_.uniqueId()}>
													{
														room.room_type_info
															.room_type
													}
												</span>
											))}
										</p>

										{/* PRICE */}
										<p>
											{hotel.total_price.amount}&nbsp;
											{hotel.total_price.currency}
										</p>
									</div>
								)
								// console.log(hotel)
							)
						: null}
				</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = state => ({
	hotels: state.hotels
});

export default connect(mapStateToProps)(App);
