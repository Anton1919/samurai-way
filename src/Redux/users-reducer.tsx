import {ActionsType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'


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
}

const initialState: InitialStateType = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u
				})
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
		default:
			return state
	}
}
export default usersReducer

export const followAC = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (pageNumber: number) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount} as const)