import React, {useState} from 'react';
import s from './ProFileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileDataType} from "./Profile.container";
import photo from '../../../assets/img/user.png'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileData from "./ProfileData/ProfileData";

type ProfileInfoType = {
	profile: ProfileDataType | null
	status: string
	updateStatus: (status: string) => void
	isOwner?: boolean
	savePhoto?: (file: string) => void
}

const ProFileInfo = ({profile, status, updateStatus, savePhoto, isOwner}: ProfileInfoType) => {
	const [edit, setEdit] = useState(false)

	const editMode = () => setEdit(true)

	if (!profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: any) => {
		if (e.target?.files) {
			savePhoto?.(e.target.files[0])
		}
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				{profile.photos &&
				profile.photos.large
					? <img src={profile.photos.large} alt="img"/>
					: <img src={photo} alt='img'
					/>}
				<div className={s.name}>{profile.fullName}</div>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

				{isOwner &&
            <label className={s.customFileUpload}>
                <input type="file" onChange={onMainPhotoSelected}/>
                Choose file to change photo
            </label>
				}

				<ProfileData editMode={editMode} isOwner={isOwner} profile={profile}/>


			</div>
		</div>
	);
};

export default ProFileInfo;