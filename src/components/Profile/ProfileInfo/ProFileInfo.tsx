import React, {useState} from 'react';
import s from './ProFileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileDataType} from "./Profile.container";
import photo from '../../../assets/img/user.png'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoType = {
	profile: ProfileDataType | null
	status: string
	updateStatus: (status: string) => void
	isOwner?: boolean
	savePhoto?: (file: string) => void
}

const ProFileInfo = (props: ProfileInfoType) => {

	const [edit, setEdit] = useState(false)

	const editMode = () => setEdit(true)

	if (!props.profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: any) => {
		if (e.target?.files) {
			props.savePhoto?.(e.target.files[0])
		}
	}


	return (
		<div>
			<div className={s.descriptionBlock}>
				{props.profile.photos &&
				props.profile.photos.large
					? <img src={props.profile.photos.large} alt="img"/>
					: <img src={photo} alt='img'
					/>}
				<div className={s.name}>{props.profile.fullName}</div>
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

				{props.isOwner &&
            <label className={s.customFileUpload}>
                <input type="file" onChange={onMainPhotoSelected}/>
                Choose file to change photo
            </label>
				}

				{/*{edit*/}
				{/*	? <ProfileDataForm profile={props.profile}/>*/}
				{/*	: */}
					<ProfileData editMode={editMode} isOwner={props.isOwner} profile={props.profile} />
				{/*}*/}


			</div>
		</div>
	);
};

export default ProFileInfo;