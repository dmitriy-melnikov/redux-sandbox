const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: [],
	orderTotal: 250
};

const updateCartItems = (cartItems, item, idx) => {
	if(idx === -1) {
		return [
			...cartItems,
			item
		]
	}
	return [
		...cartItems.slice(0, idx),
		item,
		...cartItems.slice(idx + 1)
	]
};
const updateCartItem = (book, item = {}) => {
	const {
		id = book.id,
		title = book.title,
		count = 0,
		total = 0
	} = item;
	return {
			id,
			title,
			count: count + 1,
			total: total + book.price
		};

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
			const itemIdx = state.books.findIndex(({id}) => id === bookId);
			const item = state.cartItems[itemIdx];
			const newItem = updateCartItem(book, item);
			return {
				...state,
				cartItems: updateCartItems(state.cartItems, newItem, itemIdx)
			};

		default:
			return state;
	}
};

export default reducer