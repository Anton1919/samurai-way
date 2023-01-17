import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

type MapDispatchPostPropsType = {
	updateNewPostText: (e: string) => void
	addPost: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPostPropsType => {
	return {
		updateNewPostText: (e: string) => {
			dispatch(upDateNewPostTextActionCreator(e))
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;