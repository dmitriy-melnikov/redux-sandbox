const reducer = (state = 0, action) => {
	const {type, payload} = action;
	switch (type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return state + payload;
		default:
			return 0
	}
};

export default reducer