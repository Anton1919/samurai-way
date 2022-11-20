import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProFileInfo from "./ProfileInfo/ProFileInfo";
import {PostsType} from "../../Redux/state";

 type ProfilePropsType = {
	state: {
		posts: PostsType[]
	}
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProFileInfo />
			<MyPosts posts={props.state.posts}/>
		</div>
	);
};

export default Profile;