import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/store";

type DialogsPropsType = {
	updateNewMessageBody: (body: string) => void
	sendMessage: () => void
	dialogsPage: DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {
	console.log('props', props)
	const store = props.dialogsPage
	const dialogsElements = store.dialogs.map(el =>
		<DialogItem key={el.id} name={el.name} id={el.id}/>
	)
	const messagesElements = store.messages.map(el =>
		<Message key={el.id} message={el.message}/>
	)
	const newMessageBody = store.newMessageBody

	const onSendMessageClick = () => {
		props.sendMessage()
	}

	const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const body = e.currentTarget.value
		props.updateNewMessageBody(body)
		// props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea value={newMessageBody}
											placeholder="Enter Text"
											onChange={onNewMessageChange}>
						</textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;