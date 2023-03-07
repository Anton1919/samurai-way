import {ActionsType} from "./store";
import {authAPI, FormDataType} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {setAppStatusAC} from "./app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {Dispatch} from "redux";

type authStatePropsType = {
	userId: null | number,
	email: null | string,
	login: null | string
	isAuth: boolean
	isLoggedIn: boolean
	isInitialized: boolean
}

const SET_USER_DATA = 'SET-USER-DATA'

const initialState: authStatePropsType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isLoggedIn: false,
	isInitialized: false
}

const authReducer = (state = initialState, action: ActionsType): authStatePropsType => {

	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		case "login/SET-IS-LOGGED-IN": {
			return {...state, isAuth: action.value}
		}
		case "login/SET-IS-INITIALIZED": {
			return {...state, isInitialized: action.value}
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

export const setIsLoggedInAC = (value: boolean) =>
	({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setIsInitializedAC = (value: boolean) =>
	({type: 'login/SET-IS-INITIALIZED', value} as const)


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ThunkUsersDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>

export const getAuthUserData = (): ThunkType => async (dispatch: ThunkUsersDispatch) => {
	// dispatch(setAppStatusAC('loading'))
	try {
		const res = await authAPI.me()
		if (res.data.resultCode === 0) {
			let {id, email, login} = res.data.data
			dispatch(setAuthUserData(id, email, login))
			dispatch(setIsLoggedInAC(true))
			dispatch(setIsInitializedAC(true))
			// dispatch(setAppStatusAC('succeeded'))
		} else {
			dispatch(setIsInitializedAC(true))
			handleServerAppError(res.data, dispatch)
		}
	} catch (e: any) {
		handleServerNetworkError(e, dispatch)
	}
}

export const loginTC = (data: FormDataType): ThunkType => async (dispatch: ThunkUsersDispatch) => {
	dispatch(setAppStatusAC('loading'))
	try {

		const res = await authAPI.login(data)
		if (res.resultCode === 0) {
			dispatch(setIsLoggedInAC(true))
			dispatch(setAppStatusAC('succeeded'))
		} else {
			handleServerAppError(res, dispatch)
		}
	} catch (e: any) {
		handleServerNetworkError(e, dispatch)
	}
}

export const logoutTC = () => async (dispatch: Dispatch<ActionsType>) => {
	// dispatch(setAppStatusAC('loading'))
	try {
		const res = await authAPI.logout()
		if (res.resultCode === 0) {
			dispatch(setIsLoggedInAC(false))
			// dispatch(setAppStatusAC('succeeded'))
		} else {
			handleServerAppError(res, dispatch)
		}
	} catch (e: any) {
		handleServerNetworkError(e, dispatch)
	}
}

export default authReducer