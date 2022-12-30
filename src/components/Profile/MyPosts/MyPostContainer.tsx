import React, {ChangeEvent} from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (e: ChangeEvent<HTMLTextAreaElement>) => {
			const text = e.currentTarget.value
			const actions = upDateNewPostTextActionCreator(text)
			dispatch(actions)
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		}
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;