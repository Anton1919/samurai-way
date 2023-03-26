import {ActionsType, PostsType, ProfilePageType} from "./store";
import {ProfileDataType} from "../components/Profile/ProfileInfo/Profile.container";
import {profileAPI, usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = "profile/ADD-POST"
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_STATUS = "profile/SET-STATUS"
const SAVE_USER_PHOTO = "profile/SET-USER-PHOTO"

const initialState: ProfilePageType = {
	posts: [
		{id: 1, message: 'Hello', likesCount: 11},
		{id: 2, message: 'It is my first post', likesCount: 22}
	],
	newPostText: '',
	profile: {
		aboutMe:null,
		contacts: {
			facebook: null,
			website: null,
			vk: null,
			twitter: null,
			instagram: null,
			youtube: null,
			github: null,
			mainLink: null,
		},
		lookingForAJob: false,
		lookingForAJobDescription:null,
		fullName: null,
		userId: 0,
		photos: {
			small: null,
			large: null
		}
	},
	status: '',
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
		case SAVE_USER_PHOTO : {
			return {
				...state,
				profile: {...state.profile, photos: action.photos?action.photos:{small:null, large:null}}
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
export const savePhotoSuccsess = (photos: {
	small: string | null
	large: string | null
}) => {
	return {
		type: SAVE_USER_PHOTO, photos
	} as const
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ThunkProfileDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getUserProfile = (userId: string): ThunkType => async (dispatch: ThunkProfileDispatch) => {
	const response = await usersAPI.getProfile(userId)
	dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: string): ThunkType => async (dispatch: ThunkProfileDispatch) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setStatusActionCreator(response.data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch: ThunkProfileDispatch) => {
	const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatusActionCreator(status))
	}
}
export const savePhoto = (file: string): ThunkType => async (dispatch: ThunkProfileDispatch) => {
	const response = await profileAPI.savePhoto(file)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccsess(response.data.data.photos))
	}
}

export default profileReducer
