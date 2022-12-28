import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
	return (
		dialogsPage: state.dialogsPage
	)
}

const mapDispatchToProps = (dispatch) => {
	return (
		updateNewMessageBody: () => {
			dispatch(updateNewMessageBodyCreator(body))
		},
		sendMessage: (body) => {
			dispatch(sendMessageCreator())
		}
	)
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;