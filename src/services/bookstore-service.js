export default class BookstoreService {

	getBooks = () => {
		return [
			{
				id: 1,
				title: 'Production',
				author: 'Michel'
			},
			{
				id: 2,
				title: 'Production2',
				author: 'Michel2'
			}
		];
	}
}