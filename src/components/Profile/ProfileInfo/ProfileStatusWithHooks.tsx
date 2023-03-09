import React, {ChangeEvent, useEffect, useState} from 'react';

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
		<div>
			{!editMode &&
          <div>
              <span onDoubleClick={activateMode}>{props.status || "NO STATUS"}</span>
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