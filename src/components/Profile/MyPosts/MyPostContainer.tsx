import React, {ChangeEvent} from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

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
			props.updateNewPostText(text)
		},
		addPost: () => {
			props.addPost()
		}
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;