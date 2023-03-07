import {
	addPostActionCreator,
	setStatusActionCreator,
	setUserProfile,
	upDateNewPostTextActionCreator
} from "./profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {
	followSuccess,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleFollowingProgress,
	toggleIsFetching,
	unFollowSuccess
} from "./users-reducer";
import {setAuthUserData, setIsInitializedAC, setIsLoggedInAC} from "./auth-reducer";
import {ProfileDataType} from "../components/Profile/ProfileInfo/Profile.container";
import {SetAppErrorActionType, SetAppStatusActionType} from "./app-reducer";

export type PostsType = {
	id: number
	message: string
	likesCount: number
}
export type DialogsType = {
	id: number
	name: string
}
export type MessagesType = {
	id: number
	message: string
}

export type DialogPageType = {
	dialogs: DialogsType[]
	messages: MessagesType[]
	newMessageBody: string
}
export type ProfilePageType = {
	posts: PostsType[]
	newPostText: string
	profile: null | ProfileDataType
	status: string
}

export type StateType = {
	profilePage: {
		posts: PostsType[]
		newPostText: string
	}
	dialogsPage: DialogPageType
	sidebar: {}
}

export type StoreType = {
	_state: StateType
	_callSubscriber: (action: StateType) => void
	getState: () => StateType
	subscribe: (observer: (state: StateType) => void) => void
	dispatch: (action: ActionsType) => void
}

export type ActionsType =
	ReturnType<typeof addPostActionCreator>
	| ReturnType<typeof upDateNewPostTextActionCreator>
	| ReturnType<typeof followSuccess>
	| ReturnType<typeof unFollowSuccess>
	| ReturnType<typeof setUsers>
	| ReturnType<typeof sendMessageCreator>
	| ReturnType<typeof updateNewMessageBodyCreator>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotalUsersCount>
	| ReturnType<typeof toggleIsFetching>
	| ReturnType<typeof setUserProfile>
	| ReturnType<typeof setAuthUserData>
	| ReturnType<typeof toggleFollowingProgress>
	| ReturnType<typeof setStatusActionCreator>
	| ReturnType<typeof setIsLoggedInAC>
	| ReturnType<typeof setIsInitializedAC>
	| SetAppErrorActionType
	| SetAppStatusActionType

/*const store: StoreType = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hello', likesCount: 11},
				{id: 2, message: 'It is my first post', likesCount: 22}
			],
			newPostText: ''
		},
		dialogsPage: {
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
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('hey')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action: ActionsType) {

		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	}
}*/

// @ts-ignore
// window.store = store;

/*
export default store*/
