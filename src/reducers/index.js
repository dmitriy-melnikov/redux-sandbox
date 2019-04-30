const updateBookList = (state, action) => {
	if(state === undefined) {
		return {
			books: [],
			loading: true,
			error: null
		}
	}

	const {type, payload} = action;

	console.log(type);

	switch (type) {
		case 'FETCH_BOOKS_REQUEST':
			return {
				books: [],
				loading: true,
				error: null
			};
		case 'FETCH_BOOKS_SUCCESS':
			return {
				books: payload,
				loading: false,
				error: null
			};
		case 'FETCH_BOOKS_FAILURE':
			return {
				books: [],
				loading: false,
				error: payload
			};

		default:
			return state.bookList
	}
};


const updateShoppingCart = (state, action) => {
	if(state === undefined) {
		return {
			cartItems: [],
			orderTotal: 0
		}
	}

	const { type, payload } = action;

	console.log(type);

	switch (type) {

		case 'BOOK_ADDED_TO_CART':
			return updateOrder(state, payload, 1);

		case 'BOOK_REMOVE_FROM_CART':
			return updateOrder(state, payload, -1);

		case 'ALL_BOOK_REMOVE_FROM_CART':
			const { shoppingCart: { cartItems } } = state;
			const item = cartItems.find(item => item.id === payload);
			return updateOrder(state, payload, - item.count);

		default:
			return state.shoppingCart
	}
};

const updateCartItems = (cartItems, item, idx) => {
	if(item.count === 0) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1)
		]
	}
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

const updateCartItem = (book, item = {}, quantity) => {
	const {
		id = book.id,
		title = book.title,
		count = 0,
		total = 0
	} = item;
	return {
			id,
			title,
			count: count + quantity,
			total: total + book.price * quantity
		};

};

const updateOrder = (state, bookId, quantity) => {
	const { bookList : {books}, shoppingCart: {cartItems} } = state;
	const book = books.find(({id}) => id === bookId);
	const itemIdx = books.findIndex(({id}) => id === bookId);
	const item = cartItems[itemIdx];
	const newItem = updateCartItem(book, item, quantity);
	return {
		orderTotal: 0,
		cartItems: updateCartItems(cartItems, newItem, itemIdx)
	}
};

const reducer = (state, action) => {
	return {
		bookList: updateBookList(state, action),
		shoppingCart: updateShoppingCart(state, action)
	}
};

export default reducer