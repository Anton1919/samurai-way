import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatusWithHooks.module.css'

type PropsType = {
	status: string
	updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: PropsType) => {

	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateMode = () => {
		setEditMode(true)
	}

	const deActivateMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div className={s.status}>
			{!editMode &&
          <div>
            <span onDoubleClick={activateMode}>{props.status || "NO STATUS"}</span> <button onClick={activateMode}>Change status</button>
          </div>}
			{editMode &&
          <div>
              <input autoFocus value={status} onChange={onStatusChange} onBlur={deActivateMode}/>
          </div>
			}
		</div>
	);
}

export default ProfileStatusWithHooks

