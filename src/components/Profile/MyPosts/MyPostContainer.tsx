import React from 'react';
import {StoreType} from "../../../Redux/store";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostPropsType = {
	store: StoreType
}

const MyPostsContainer = (props: MyPostPropsType) => {

	const state = props.store.getState()

	const addPost = () => {
		// props.addPost()
		props.store.dispatch(addPostActionCreator())
	}

	const onPostChange = (text: string) => {
		// props.uodateNewPostText(text)
		const action = upDateNewPostTextActionCreator(text)
		props.store.dispatch(action)
	}

	return (
		<MyPosts
			updateNewPostText={onPostChange}
			addPost={addPost}
			posts={state.profilePage.posts}
			newPostText={state.profilePage.newPostText}
		/>
	);
};

export default MyPostsContainer;