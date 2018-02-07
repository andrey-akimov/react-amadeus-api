import React, { Component } from 'react';
import Hotel from '../../components/Hotel';

class HotelsList extends Component {
	render(){
		console.log(this.props);

		// PAGINATION
		let totalPages = null;
		let currentHotels = null;
		if (this.props.hotels !== null) {
			totalPages = Math.ceil(this.props.hotels.length / 10);
			currentHotels = pageNum => {
				const pagination = {
					pages: [],
					hotels: []
				}
				for (let index = 1; index <= totalPages; index++) {
					let from = (index - 1) * 10;
					let to = index * 10 - 1;
					pagination.pages.push(index);
					pagination.hotels.push({
						from,
						to
					});
				}
				return pagination;
			}
		}
		// PAGINATION

		return (
			<div>
				{(this.props.hotels !== null && totalPages > 1)
					? console.log(currentHotels(totalPages))
					: null}
				{(this.props.hotels !== null && totalPages < 1)
					? this.props.hotels.map(
							hotel => <Hotel key={hotel.property_code} {...hotel} />
							// console.log(hotel)
						)
					: null}
			</div>
		);
	}
};

export default HotelsList;
