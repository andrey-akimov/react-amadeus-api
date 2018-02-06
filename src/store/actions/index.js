export const getHotels = data => ({
	type: 'GET_HOTELS',
	data
});

export const chooseAirport = airport => ({
	type: 'CHOOSE_AIRPORT',
	airport
});

export const chooseFromDate = from => ({
	type: 'CHOOSE_FROM_DATE',
	from
});

export const chooseToDate = to => ({
	type: 'CHOOSE_TO_DATE',
	to
});

export const chooseCurrency = currency => ({
	type: 'CHOOSE_CURRENCY',
	currency
});

export const chooseRadius = radius => ({
	type: 'CHOOSE_RADIUS',
	radius
});

export const chooseMaxPrice = maxPrice => ({
	type: 'CHOOSE_MAX_RATE',
	maxPrice
});
