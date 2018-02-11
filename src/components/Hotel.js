import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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

	const styles = {
		width: '400px',
		margin: '20px auto'
	}

	return (
		<Card style={styles}>
			<CardMedia
				overlay={<CardTitle title={props.property_name} subtitle={props.address.line1} />}
			>
			<img
				src={
					// There are no pictures in the API :(
					props.images.length < 1 
					? "http://fakeimg.pl/350x200/?text=No+photo&font=lobster" 
					: props.images[0]
				}
				alt="photos"
			/>
			</CardMedia>

			<CardTitle 
				title={_.uniq(props.contacts).map((contact, i, arr) => (
					<span key={_.uniqueId()}>
						{contact.detail}
						{(arr.length - 1 === i) ? null : ', '}
					</span>
				))}
			/>

			<CardText>
				Description: {props.amenities.map((amenity, i, arr) => (
					<span key={_.uniqueId()}>
						{amenity.description}
						{(arr.length - 1 === i) ? null : ', '}
					</span>
				))}

				<p>
					Type of room: {props.rooms.map(room => (
						<span key={_.uniqueId()}>
							{room.room_type_info.room_type}
						</span>
					))}
				</p>

				<p>
					Price: {props.total_price.amount}&nbsp;
					{props.total_price.currency}
				</p>
			</CardText>

			<CardActions>
				<FlatButton 
					label="Look at the Google Maps"
					href={googleMapRef}
					target="_blank"
				/>
			</CardActions>
		</Card>
	);
};

export default Hotel;
