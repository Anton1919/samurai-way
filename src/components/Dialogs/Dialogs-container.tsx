import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";

type MapDispatchDialogPropsType = {
	updateNewMessageBody: (body: string) => void
	sendMessage: () => void
}

const mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
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