import React, {ComponentType} from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapDispatchDialogPropsType = {
	updateNewMessageBody: (body: string) => void
	sendMessage: () => void
}

const mapStateToProps = (state: AppStateType) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialogPropsType => {
	return {
		updateNewMessageBody: (body: string) => {
			dispatch(updateNewMessageBodyCreator(body))
		},
		sendMessage: () => {
			dispatch(sendMessageCreator())
		}
	}
}


export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)
(Dialogs))