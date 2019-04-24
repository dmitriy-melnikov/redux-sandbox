import { random } from 'lodash';
export const inc = () => (
	{type: 'INC'}
);
export const dec = () => (
	{type: 'DEC'}
);
export const rnd = () => {
	return {
		type: 'RND',
		payload: random(1,10)
	};
};