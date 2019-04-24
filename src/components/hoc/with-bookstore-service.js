import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapper) => {
	return (props) => {
		return (
			<BookstoreServiceConsumer>
				{
					(bookstoreService) => <Wrapper
						{ ...props }
						bookstoreService={bookstoreService}
					/>
				}
			</BookstoreServiceConsumer>

		)
	}
};

export default withBookstoreService