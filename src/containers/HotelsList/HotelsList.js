import React, { Component } from 'react';
import * as _ from 'lodash';
import Hotel from '../../components/Hotel';

class HotelsList extends Component {
	state = {
		pages: [],
		hotels: [],
		hotelsData: [],
		currentPage: 1
	}

	paginationHandler = (page) => {
		this.setState((prevState, props) => {
			return {
				hotelsData: props.hotels.slice(prevState.hotels[page - 1].from, prevState.hotels[page - 1].to + 1),
				currentPage: page
			}
		});
	}

	componentWillReceiveProps (nextProps) {
		console.log(nextProps)
		// pagination
		if (nextProps.hotels !== null || _.difference(this.props.hotels, nextProps.hotels).length > 0) {
			const totalPages = Math.ceil(nextProps.hotels.length / 10);
			const currentHotels = pageNum => {
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
				this.setState((prevState, props) => {
					return {
						...pagination,
						hotelsData: nextProps.hotels.slice(pagination.hotels[0].from, pagination.hotels[0].to + 1)
						// ^^^ change this later ^^^
					}
				});
			}
			currentHotels(totalPages);
		}
	}	

	render(){
		console.log('*******************')
		return (
			<div>
				{(this.state.hotelsData !== null && this.state.pages.length > 1)
					? this.state.pages.map(
							page => (
								<span 
									onClick={() => this.paginationHandler(page)}
									className={page === this.state.currentPage ? "pagination active" : "pagination"}
									key={_.uniqueId()}
								>
									{page}
								</span>
						))
					: null}

				{(this.state.hotelsData !== null)
					? this.state.hotelsData.map(
							hotel => <Hotel key={hotel.property_code} {...hotel} />
						)
					: null}
			</div>
		);
	}
};

export default HotelsList;
