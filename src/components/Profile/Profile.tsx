import React from 'react';
import ProFileInfo from "./ProfileInfo/ProFileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {OwnPropsType} from "./ProfileInfo/Profile.container";
import s from './Profile.module.css'

const Profile = (props: OwnPropsType  ) => {
	return (
		<div className={s.profile}>
			<ProFileInfo savePhoto={props.savePhoto} profile={props.profile} isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;