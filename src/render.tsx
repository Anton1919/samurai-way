import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./Redux/state"

export const rerenderEntireTree = (state: StateType) => {
	ReactDOM.render(
		<App state={state}
				 addPost={addPost}
				 updateNewPostText={updateNewPostText}
		/>,
		document.getElementById('root')
	);
}

