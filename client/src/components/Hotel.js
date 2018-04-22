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
		phoneNum:{
			fontSize: '18px'
		},
		phoneBlock:{
			paddingTop: '0'
		}
	}

	return (
		<Card className="card">
			<CardMedia overlay={
				<CardTitle
					className="card-title"
					title={props.property_name.length <= 30
						? props.property_name
						: props.property_name.slice(0, 30) + '...'
					}
					subtitle={props.address.line1}
				/>
			}
			>
			<img
				src={
					// There are no pictures in the API :(
					props.images.length < 1 
					? "https://fakeimg.pl/350x200/?text=No+photo" 
					: props.images[0]
				}
				alt="photos"
			/>
			</CardMedia>

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

			<CardTitle
				style={styles.phoneBlock}
				title={_.uniq(props.contacts).map((contact, i, arr) => (
					<span style={styles.phoneNum} key={_.uniqueId()}>
						{contact.detail}
						{(arr.length - 1 === i) ? null : ', '}
					</span>
				))}
			/>

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
