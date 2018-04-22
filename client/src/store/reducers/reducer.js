const initialState = {
	hotels: null,
	loading: false,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_HOTELS':
			return {
				...state,
				hotels: action.data,
				loading: false
			};

		case 'LOADING':
			return {
				...state,
				loading: true
			};

		case 'ERROR':
			return {
				...state,
				loading: false,
				error: true
			};

		default:
			return state;
	}
};

export default reducer;
