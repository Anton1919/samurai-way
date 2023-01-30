import {ActionsType} from "./store";
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

type authStatePropsType = {
	userId: null | number,
	email: null | string,
	login: null | string
	isAuth: boolean
}

const SET_USER_DATA = 'SET-USER-DATA'

const initialState: authStatePropsType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action: ActionsType): authStatePropsType => {

	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default:
			return state
	}
}

export const setAuthUserData = (userId: number,
																email: string,
																login: string) => ({
	type: SET_USER_DATA, data: {userId, email, login}
} as const)


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ThunkUsersDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getAuthUserData = (): ThunkType => (dispatch: ThunkUsersDispatch) => {
	return authAPI.me()
		.then((response) => {
			let {id, email, login} = response.data.data
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData(id, email, login))
			}
		})
}

export default authReducer