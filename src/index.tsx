import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store, {StateType} from "./Redux/state";

const rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<App state={state}
				 dispatch={store.dispatch.bind(store)}
				 store={store}
		/>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store._state)

// store.subscribe(rerenderEntireTree)

