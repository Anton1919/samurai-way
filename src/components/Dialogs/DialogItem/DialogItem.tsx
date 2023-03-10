import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
	key: number
	id: number
	name: string
}

const DialogItem = (props: DialogItemPropsType) => {
	let path = "/dialogs/" + props.id

	return (
		<div className={s.dialogs + ' ' + s.active}>
			<NavLink to={path} activeClassName={s.active}>{props.name} </NavLink>
		</div>
	)
}

export default DialogItem;