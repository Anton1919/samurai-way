import {ActionsType} from "./store";
import {usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET-USERS"
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS'

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ThunkUsersDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>

export type UserType = {
	followed: boolean
	name: string
	id: number
	uniqueUrlName: null
	photos: { small: null, large: null }
	status: null
}

export type InitialStateType = {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]
}

const initialState: InitialStateType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, {followed: true})
				/*users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})*/
			}

		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, {followed: false})
				/*users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u
				})*/
			}

		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.count
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state
	}
}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const unFollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (pageNumber: number) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching, userId
} as const)

export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch: ThunkUsersDispatch) => {
	dispatch(toggleIsFetching(true))
	dispatch(setCurrentPage(page))
	const data = await usersAPI.getUsers(page, pageSize)
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch: ThunkUsersDispatch, userId: number, apiMethod: any, actionCreator: any) => {
	dispatch(toggleFollowingProgress(true, userId))
	const data = await apiMethod(userId)
	if (data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch: ThunkUsersDispatch) => {
	await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess)
}

export const unfollow = (userId: number): ThunkType => async (dispatch: ThunkUsersDispatch) => {
	await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unFollowSuccess)
}

export default usersReducer