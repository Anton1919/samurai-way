import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProFileInfo from "./ProfileInfo/ProFileInfo";
import {ActionsType, PostsType} from "../../Redux/state";

type ProfilePropsType = {
	profilePage: {
		posts: PostsType[]
		newPostText: string
	}
	dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProFileInfo/>
			<MyPosts posts={props.profilePage.posts}
							 dispatch={props.dispatch}
							 newPostText={props.profilePage.newPostText}
			/>
		</div>
	);
};

export default Profile;