import React from 'react';
import s from './ProFileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {OwnPropsType} from "./Profile.container";

const ProFileInfo = (props: any) => {

	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div>
			<div>
				<img
					src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
					alt="img"/>
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt="img"/>
				<div>{props.profile.fullName}</div>
			</div>
		</div>
	);
};

export default ProFileInfo;