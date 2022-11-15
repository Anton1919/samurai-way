import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProFileInfo from "./ProfileInfo/ProFileInfo";

const Profile = () => {
	return (
		<div>
			<ProFileInfo/>
			<MyPosts/>
		</div>
	);
};

export default Profile;