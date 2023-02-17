import {ActionsType, PostsType, ProfilePageType} from "./store";
import {ProfileDataType} from "../components/Profile/ProfileInfo/Profile.container";
import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

const initialState: ProfilePageType = {
	posts: [
		{id: 1, message: 'Hello', likesCount: 11},
		{id: 2, message: 'It is my first post', likesCount: 22}
	],
	newPostText: '',
	profile: null,
	status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

	switch (action.type) {
		case ADD_POST: {
			const newPost: PostsType = {
				id: 7,
				message: state.newPostText,
				likesCount: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newPostText
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case SET_USER_PROFILE : {
			return {
				...state,
				profile: action.profile
			}
		}
		default:
			return state
	}
}

export const setStatusActionCreator = (status: string) => ({type: SET_STATUS, status} as const)

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
		// postText: postText
	} as const
}


export const upDateNewPostTextActionCreator = (text: string) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newPostText: text
	} as const
}

export const setUserProfile = (profile: ProfileDataType) => {
	return {
		type: SET_USER_PROFILE, profile
	} as const
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ThunkProfileDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getUserProfile = (userId: string): ThunkType => (dispatch: ThunkProfileDispatch) => {
	usersAPI.getProfile(userId)
		.then((response) => {
			dispatch(setUserProfile(response.data))
		})
}

export const getStatus = (userId: string): ThunkType => (dispatch: ThunkProfileDispatch) => {
	profileAPI.getStatus(userId)
		.then((response) => dispatch(setStatusActionCreator(response.data)))
}

export const updateStatus = (status: string): ThunkType => (dispatch: ThunkProfileDispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatusActionCreator(status))
			}
		})
}


export default profileReducer
