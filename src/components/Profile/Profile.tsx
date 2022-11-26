import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProFileInfo from "./ProfileInfo/ProFileInfo";
import {PostsType} from "../../Redux/state";

type ProfilePropsType = {
	profilePage: {
		posts: PostsType[]
		newPostText: string
	}
	addPost: () => void
	updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProFileInfo/>
			<MyPosts posts={props.profilePage.posts}
							 addPost={props.addPost}
							 newPostText={props.profilePage.newPostText}
							 updateNewPostText={props.updateNewPostText}
			/>
		</div>
	);
};

export default Profile;