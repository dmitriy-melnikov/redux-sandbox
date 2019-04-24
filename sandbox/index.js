import React from 'react';
import {render} from 'react-dom';
import { Provider } from "react-redux";
//import { createStore, bindActionCreators } from 'redux';
import { createStore } from 'redux';
//import { random } from 'lodash';

import App from './components/App';

import reducer from './reducer';

//import * as actions from './actions';

const store = createStore(reducer);

//const { dispatch, subscribe, getState } = store;

/*const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (payload) => dispatch(rnd(payload));*/

/*
const bindActionCreator = (creator, dispatch) => (...args) => dispatch(creator(...args));
const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);*/

/*const {
	incDispatch,
	decDispatch,
	rndDispatch
} = bindActionCreators({
	incDispatch: inc,
	decDispatch: dec,
	rndDispatch: rnd
}, dispatch);*/

/*const {inc, dec, rnd } = bindActionCreators(actions, dispatch);*/

/*document
	.getElementById('inc')
	.addEventListener('click', inc);

document
	.getElementById('dec')
	.addEventListener('click', dec);

document
	.getElementById('rnd')
	.addEventListener('click', () => {
		const payload = random(1, 10);
		rnd(payload);
	});*/

/*const update = () => {
	render(
		<Provider store={store}>
			<App/>
		</Provider>
		, document.getElementById('root'));
};*/

//update();

//subscribe(update);

render(
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root')
);



