import React from 'react';
import ProFileInfo from "./ProfileInfo/ProFileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {OwnPropsType} from "./ProfileInfo/Profile.container";

const Profile = (props: OwnPropsType ) => {

	return (
		<div>
			<ProFileInfo profile={props.profile}/>
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;