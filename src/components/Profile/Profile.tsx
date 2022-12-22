import React from 'react';
import ProFileInfo from "./ProfileInfo/ProFileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

// type ProfilePropsType = {
// 	store: StoreType
// }

const Profile = () => {
	return (
		<div>
			<ProFileInfo/>
			<MyPostsContainer />
		</div>
	);
};

export default Profile;