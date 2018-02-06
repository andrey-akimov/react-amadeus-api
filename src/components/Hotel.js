import React from 'react';
import * as _ from 'lodash';

const Hotel = props => {
	const key = 'AIzaSyDDIMhSZKWzWl2llmZMp32R1GVCBPkQqZQ';
	const googleMapRef =
		`https://maps.googleapis.com/maps/api/staticmap?` +
		`center=${props.location.latitude},${props.location.longitude}` +
		`&markers=color:blue%7Clabel:H%7C` +
		`${props.location.latitude},${props.location.longitude}` +
		`&zoom=13` +
		`&size=600x300` +
		`&key=${key}`;

	return (
		<div>
			{/* IMG */}
			<img
				src="http://fakeimg.pl/350x200/?text=No+photo&font=lobster"
				alt="photos"
			/>

			{/* NAME AND ADDRESS */}
			<h2>
				{props.property_name},&nbsp;
				<a href={googleMapRef} target="_blank">
					{props.address.line1}
				</a>
			</h2>

			{/* CONTACTS */}
			<p>
				{_.uniq(props.contacts).map(contact => (
					<span key={_.uniqueId()}>{contact.detail}</span>
				))}
			</p>

			{/* DESCRIPTION */}
			<p>
				{props.amenities.map(amenity => (
					<span key={_.uniqueId()}>{amenity.description}</span>
				))}
			</p>

			{/* ROOMS FOR RENT */}
			<p>
				{props.rooms.map(room => (
					<span key={_.uniqueId()}>
						{room.room_type_info.room_type}
					</span>
				))}
			</p>

			{/* PRICE */}
			<p>
				{props.total_price.amount}&nbsp;
				{props.total_price.currency}
			</p>
		</div>
	);
};

export default Hotel;
