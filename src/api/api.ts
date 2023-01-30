import axios from "axios";
import {UserType} from "../Redux/users-reducer";
import {ProfileDataType} from "../components/Profile/ProfileInfo/Profile.container";
import {ResponseHeaderType} from "../components/Header/HeaderContainer";

type getUsersResponseType = {
	error: null | string
	items: UserType[]
	totalCount: number
}
type followResponseType = {
	data: { id: number, email: string, login: string }
	fieldsErrors: [] | string[]
	resultCode: number
	messages: [] | string[]
}
type unFollowResponseType = {
	data: { id: number, email: string, login: string }
	fieldsErrors: [] | string[]
	resultCode: number
	messages: [] | string[]
}
//
// type DataFollowedType = {
// 	id: number,
// 	email: string,
// 	login: string
// }
// type ResponseGenericType<T> = {
// 	data: T
// 	fieldsErrors: [] | string[]
// 	resultCode: number
// 	messages: [] | string[]
// }

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {"API-KEY": "82e04a93-e2e9-41a4-ac2e-ccde52c0a988"}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get<getUsersResponseType>
		(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},

	follow(userId: number) {
		return instance.post<followResponseType>(`follow/${userId}`)
			.then((response) => response.data)
	},

	unfollow(userId: number) {
		return instance.delete<unFollowResponseType>(`follow/${userId}`,)
			.then((response) => response.data)
	},

	getProfile( userId: string) {
		return instance.get<ProfileDataType>(`profile/` + userId)
	}
}

export const authAPI = {
	me() {
		return instance.get<ResponseHeaderType>(`auth/me`)
	}
}


