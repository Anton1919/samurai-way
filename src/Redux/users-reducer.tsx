import {ActionsType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

// export type UserType = {
// 	id: number
// 	photoUrl: string
// 	followed: boolean
// 	fullName: string
// 	status: string
// 	location: { city: string, country: string }
// }

export type UserType = {
	followed: boolean
	name: string
	id: number
	uniqueUrlName: null
	photos: {small: null, large: null}
	status: null
}

export type InitialStateType = {
	users: UserType[]
}

const initialState: InitialStateType = {
	users: []
}
// type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

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
			return {...state, users: [...state.users, ...action.users]}
		}
		default:
			return state
	}
}
export default usersReducer

export const followAC = (userId: number) => {
	return {
		type: FOLLOW,
		userId: userId
	} as const
}
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)