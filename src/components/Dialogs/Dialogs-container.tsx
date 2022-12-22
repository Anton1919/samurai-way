import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Store-Context";

// type DialogsPropsType = {
// 	store: StoreType
// }

const DialogsContainer = () => {

	return <StoreContext.Consumer>
		{
			(store) => {

				const state = store.getState().dialogsPage

				const onSendMessageClick = () => {
					store.dispatch(sendMessageCreator())
				}

				const onNewMessageChange = (body: string) => {
					store.dispatch(updateNewMessageBodyCreator(body))
				}

				return <Dialogs
					sendMessage={onSendMessageClick}
					updateNewMessageBody={onNewMessageChange}
					dialogsPage={state}
				/>
			}
		}
	</StoreContext.Consumer>
}


export default DialogsContainer;