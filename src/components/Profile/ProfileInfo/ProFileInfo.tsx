import React from 'react';
import s from './ProFileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {OwnPropsType, ProfileDataType} from "./Profile.container";
import ProfileStatus from './ProfileStatus';

type ProfileInfoType = {
	profile: ProfileDataType | null
}
const ProFileInfo = (props: ProfileInfoType) => {

	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div>
			{/*<div>*/}
			{/*	/!*<img*!/*/}
			{/*	/!*	src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="*!/*/}
			{/*	/!*	alt="img"/>*!/*/}
			{/*</div>*/}
			<div className={s.descriptionBlock}>
				{props.profile.photos && props.profile.photos.large && <img src={props.profile.photos.large} alt="img"/>}
				<div>{props.profile.fullName}</div>
				<ProfileStatus status={'Hello everybody'}/>
			</div>
		</div>
	);
};

export default ProFileInfo;