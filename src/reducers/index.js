const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: [],
	orderTotal: 250
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	console.log(type);

	switch (type) {
		case 'FETCH_BOOKS_REQUEST':
			return {
				...state,
				books: [],
				loading: true,
				error: null
			};
		case 'FETCH_BOOKS_SUCCESS':
			return {
				...state,
				books: payload,
				loading: false,
				error: null
			};
		case 'FETCH_BOOKS_FAILURE':
			return {
				...state,
				books: [],
				loading: false,
				error: payload
			};
		case 'BOOK_ADDED_TO_CART':
			const bookId = payload;
			const book = state.books.find(({id}) => id === bookId);
			const newItem = {
				id: bookId,
				name: book.title,
				count: 1,
				total: book.price
			};
			return{
				...state,
				cartItems: [
					...state.cartItems,
					newItem
				]
			};

		default:
			return state;
	}
};

export default reducer