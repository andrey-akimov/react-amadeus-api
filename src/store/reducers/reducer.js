const initialState = {
	hotels: null,
	formOptions: {
		airport: 'ODS',
		from: null,
		to: null,
		currency: 'USD',
		radius: 10,
		maxPrice: 250
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_HOTELS':
			return {
				hotels: action.data.filter(hotel => {
					return (hotel.total_price.amount <= state.formOptions.maxPrice)	? true : false;
				}),
				formOptions: state.formOptions
			};

		case 'CHOOSE_AIRPORT':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					airport: action.airport
				}
			};

		case 'CHOOSE_FROM_DATE':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					from: action.from
				}
			};

		case 'CHOOSE_TO_DATE':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					to: action.to
				}
			};

		case 'CHOOSE_CURRENCY':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					currency: action.currency
				}
			};

		case 'CHOOSE_RADIUS':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					radius: action.radius
				}
			};

		case 'CHOOSE_MAX_RATE':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					maxPrice: action.maxPrice
				}
			};

		default:
			return state;
	}
};

export default reducer;
