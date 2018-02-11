const initialState = {
	hotels: null,
	formOptions: {
		airport: 'ODS',
		from: null,
		to: null,
		currency: 'USD',
		radius: 10,
		maxPrice: 250
	},
	loading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_HOTELS':
			return {
				hotels: action.data.filter(hotel => {
					return (hotel.total_price.amount <= state.formOptions.maxPrice)	? true : false;
				}),
				formOptions: state.formOptions,
				loading: false
			};

		case 'CHOOSE_AIRPORT':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					airport: action.airport
				},
				loading: false
			};

		case 'CHOOSE_FROM_DATE':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					from: action.from
				},
				loading: false
			};

		case 'CHOOSE_TO_DATE':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					to: action.to
				},
				loading: false
			};

		case 'CHOOSE_CURRENCY':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					currency: action.currency
				},
				loading: false
			};

		case 'CHOOSE_RADIUS':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					radius: action.radius
				},
				loading: false
			};

		case 'CHOOSE_MAX_RATE':
			return {
				hotels: state.hotels,
				formOptions: {
					...state.formOptions,
					maxPrice: action.maxPrice
				},
				loading: false
			};

		case 'LOADING':
		return {
			hotels: state.hotels,
			formOptions: state.formOptions,
			loading: true
		};
			
		default:
			return state;
	}
};

export default reducer;
