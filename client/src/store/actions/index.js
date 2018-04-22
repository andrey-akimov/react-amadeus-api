export const getHotels = data => ({
	type: 'GET_HOTELS',
	data
});

export const loading = () => ({
	type: 'LOADING'
});

export const getError = () => ({
	type: 'ERROR'
});
