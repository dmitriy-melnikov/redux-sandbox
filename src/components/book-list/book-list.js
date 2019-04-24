import React, { Component } from 'react';
import { connect } from 'react-redux';

import { compose } from '../../utils';

//import { bindActionCreators } from 'redux';

import { booksLoaded } from '../../actions';

import { withBookstoreService } from '../hoc'

import BookListItem from '../book-list-item';

import './book-list.css';

class BookList extends Component {

	componentDidMount() {
		const {bookstoreService, booksLoaded} = this.props;
		const books = bookstoreService.getBooks();
		console.log(books);
		booksLoaded(books);
	}

	render() {
		const { books } = this.props;
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

const mapStateToProps = ({books}) => {
	return{
		books
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

const mapDispatchToProps = {
	booksLoaded
};

/*
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))*/

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList)
