import React, { Component } from 'react';
import { connect } from 'react-redux';

import { compose } from '../../utils';

//import { bindActionCreators } from 'redux';

import { booksLoaded, booksRequested, booksError } from '../../actions';

import { withBookstoreService } from '../hoc'

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookList extends Component {

	componentDidMount() {
		this.props.fetchBooks()
	}


	render() {
		const { books, loading, error } = this.props;
		if(loading) {
			return <Spinner/>
		}
		if(error) {
			return <ErrorIndicator/>
		}
		return(
			<ul className="book-list">
				{
					books.map((book) => <li key={book.id}>
					<BookListItem book={book}/>
				</li>)
				}
			</ul>
		)
	}
}

const mapStateToProps = ({books, loading, error}) => {
	return{
		books,
		loading,
		error
	}
};

/*const mapDispatchToProps = (dispatch) => {
	return {
		booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks))
	}
};*/

/*const mapDispatchToProps = (dispatch) => bindActionCreators(
	{
		booksLoaded
	}, dispatch);*/

/*const mapDispatchToProps = {
	booksLoaded,
	booksRequested,
	booksError
};*/

const mapDispatchToProps = (dispatch, ownProps) => {
	const {bookstoreService} = ownProps;
	return {
		fetchBooks: () => {
			dispatch(booksRequested());
			bookstoreService
				.getBooks()
				.then((books) => dispatch(booksLoaded(books)))
				.catch(err => dispatch(booksError(err)))
		}
	}
};


/*
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))*/

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList)
