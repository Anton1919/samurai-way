import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "./Store-Context";
import store, {StateType} from "./Redux/store";

const rerenderEntireTree = (state: StateType) => {

	ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>
		,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
	const state = store.getState()
	rerenderEntireTree(state)
})

