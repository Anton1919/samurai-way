import React from 'react';
import ProFileInfo from "./ProfileInfo/ProFileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {OwnPropsType} from "./ProfileInfo/Profile.container";

const Profile = (props: any ) => {
	// console.log(props)
	return (
		<div>
			<ProFileInfo profile={props.profile}/>
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;