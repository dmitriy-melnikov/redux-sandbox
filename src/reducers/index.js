const initialState = {
	books: []
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'BOOKS_LOADED':
			return {
				books: payload
			};
		default:
			return state;
	}
};

export default reducer