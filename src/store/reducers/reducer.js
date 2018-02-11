const initialState = {
	hotels: null,
	loading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_HOTELS':
			return {
				hotels: action.data,
				loading: false
			};

		case 'LOADING':
		return {
			...state,
			loading: true
		};
			
		default:
			return state;
	}
};

export default reducer;
