import React from 'react';
import {ProfileDataType} from "../Profile.container";
import s from './ProfileData.module.css'

type PropsType = {
	isOwner?: boolean
	profile: ProfileDataType | null
	editMode: () => void
}

const ProfileData = (props: PropsType) => {

	return (
		<div className={s.block}>
			{/*{props.isOwner && <button onClick={props.editMode}>Edit</button>}*/}
			<div className={s.descr}>About me:
				<span>{props.profile?.aboutMe}</span>
			</div>
			<div className={s.descr}>Looking for a job:
				<span> {props.profile?.lookingForAJob ? 'yes' : 'no'}</span>
			</div>
			<div className={s.descr}>My professional skills:
				<span> {props.profile?.lookingForAJobDescription}</span>
			</div>
		</div>
	);
};

export default ProfileData;