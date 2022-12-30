import {ActionsType, DialogPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState: DialogPageType = {
	dialogs: [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Masha'},
		{id: 3, name: 'Anton'},
		{id: 4, name: 'Sasha'},
		{id: 5, name: 'Vasya'},
		{id: 6, name: 'Olga'},
	],
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'Yo'},
		{id: 4, message: 'Yo'},
		{id: 5, message: 'Buy'},
	],
	newMessageBody: ''
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {

	let stateCopy;
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			stateCopy = {...state, newMessageBody: action.body}
			return stateCopy
		case SEND_MESSAGE:
			const body = state.newMessageBody;
			stateCopy = {
				...state,
				newMessageBody: '',
				messages: [...state.messages, {id: 6, message: body}]
			}
			return stateCopy
		default:
			return state
	}
}

export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE
	} as const
}

export const updateNewMessageBodyCreator = (body: string) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	} as const
}

export default dialogsReducer