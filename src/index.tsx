import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store, {RootStoreType} from "./Redux/redux-store"
import {StoreType} from "./Redux/store";

const rerenderEntireTree = (state: RootStoreType) => {

	ReactDOM.render(
		<App state={state}
				 dispatch={store.dispatch.bind(store)}
				 store={store as unknown as StoreType}
		/>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
	const state = store.getState()
	rerenderEntireTree(state)
})

