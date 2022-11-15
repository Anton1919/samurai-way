import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
	id: number
	name: string
}
type MessagePropsType = {
	message: string
}

const DialogItem = (props: DialogItemPropsType) => {
	let path = "/dialogs/" + props.id

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}
const Message = (props: MessagePropsType) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name='Dimych' id={1}/>
				<DialogItem name='Masha' id={2}/>
				<DialogItem name='Anton' id={3}/>
				<DialogItem name='Sasha' id={4}/>
				<DialogItem name='Vasya' id={5}/>
				<DialogItem name='Olga' id={6}/>
			</div>
			<div className={s.messages}>
				<Message message='Hi'/>
				<Message message='How are you?'/>
				<Message message='Yo'/>
			</div>
		</div>
	);
};

export default Dialogs;