import React from 'react';
import './index.css';
import state, {addPost, subscribe, updateNewPostText} from "./Redux/state";
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = () => {
	ReactDOM.render(
		<App state={state}
				 addPost={addPost}
				 updateNewPostText={updateNewPostText}
		/>,
		document.getElementById('root')
	);
}

rerenderEntireTree()

subscribe(rerenderEntireTree)

