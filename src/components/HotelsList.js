import React from 'react';
import * as _ from 'lodash';

const HotelsList = props => {
	return (
		<div>
			{props.hotels !== null
				? props.hotels.map(
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
									<a href="/">{hotel.address.line1}</a>
								</h2>

								{/* CONTACTS */}
								<p>
									{_.uniq(hotel.contacts).map(contact => (
										<span key={_.uniqueId()}>
											{contact.detail}
										</span>
									))}
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
											{room.room_type_info.room_type}
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
	);
};

export default HotelsList;
