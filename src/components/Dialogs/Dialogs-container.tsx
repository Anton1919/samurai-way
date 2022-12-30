import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {StateType} from "../../Redux/store";

type MapDispatchDialogPropsType = {
	updateNewMessageBody: (body: string) => void
	sendMessage: () => void
}

const mapStateToProps = (state: StateType) => {
	console.log(state)
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialogPropsType => {
	return {
		updateNewMessageBody: (body: string) => {
			dispatch( updateNewMessageBodyCreator(body) )
		},
		sendMessage: () => {
			dispatch(sendMessageCreator())
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;