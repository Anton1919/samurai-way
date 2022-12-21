import React from 'react';
import ProFileInfo from "./ProfileInfo/ProFileInfo";
import {StoreType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostContainer";

type ProfilePropsType = {
	store: StoreType
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProFileInfo/>
			<MyPostsContainer store={props.store}/>
		</div>
	);
};

export default Profile;