import React from 'react';
import Hotel from './Hotel';

const HotelsList = props => {
	return (
		<div>
			{props.hotels !== null
				? props.hotels.map(
						hotel => <Hotel key={hotel.property_code} {...hotel} />
						// console.log(hotel)
					)
				: null}
		</div>
	);
};

export default HotelsList;
