import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {StoreType} from "../../Redux/store";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
	store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {

	const state = props.store.getState().dialogsPage

	const onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	}

	const onNewMessageChange = (body: string) => {
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return <Dialogs
		sendMessage={onSendMessageClick}
		updateNewMessageBody={onNewMessageChange}
		dialogsPage={state}

	/>
}


export default DialogsContainer;