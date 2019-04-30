const booksLoaded = (newBooks) => ({
	type: 'FETCH_BOOKS_SUCCESS',
	payload: newBooks
});

const booksRequested = () => ({
	type: 'FETCH_BOOKS_REQUEST',
});

const booksError = (error) => ({
	type: 'FETCH_BOOKS_FAILURE',
	payload: error
});

const bookAddedToCart = (bookId) => ({
	type: 'BOOK_ADDED_TO_CART',
	payload: bookId
});

const bookRemoveFromCart = (bookId) => ({
	type: 'BOOK_REMOVE_FROM_CART',
	payload: bookId
});

const allBooksRemoveFromCart = (bookId) => ({
	type: 'ALL_BOOK_REMOVE_FROM_CART',
	payload: bookId
});



const fetchBooks = (dispatch, bookstoreService) => () => {
	dispatch(booksRequested());
	bookstoreService
		.getBooks()
		.then((books) => dispatch(booksLoaded(books)))
		.catch(err => dispatch(booksError(err)))
};

export {
	/*booksLoaded,
	booksRequested,
	booksError,*/
	fetchBooks,
	bookAddedToCart,
	bookRemoveFromCart,
	allBooksRemoveFromCart
}