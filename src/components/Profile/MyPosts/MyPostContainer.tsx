import React from 'react';
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Store-Context";
//
// type MyPostPropsType = {
// 	store: StoreType
// }

const MyPostsContainer = () => {

	return (
		<StoreContext.Consumer>
			{
				(store) => {

					const state = store.getState()

					const addPost = () => {
						// props.addPost()
						store.dispatch(addPostActionCreator())
					}

					const onPostChange = (text: string) => {
						// props.uodateNewPostText(text)
						const action = upDateNewPostTextActionCreator(text)
						store.dispatch(action)
					}

					return <MyPosts
						updateNewPostText={onPostChange}
						addPost={addPost}
						posts={state.profilePage.posts}
						newPostText={state.profilePage.newPostText}
					/>
				}
			}
		</StoreContext.Consumer>
	);
};

export default MyPostsContainer;