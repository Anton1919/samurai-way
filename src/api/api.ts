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

export type ResponseType<D = {}> = {
	resultCode: number
	messages: Array<string>
	fieldsErrors: Array<string>
	data: D
}
export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}

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

	getProfile(userId: string) {
		return profileAPI.getProfile(userId)
	}
}

export const profileAPI = {
	getProfile(userId: string) {
		return instance.get<ProfileDataType>(`profile/` + userId)
	},
	getStatus(userId: string) {
		return instance.get(`profile/status/` + userId)
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, {
			status: status
		})
	},
	savePhoto(photoFile: string) {
		const formData = new FormData()
		formData.append("image", photoFile)
		return instance.put(`profile/photo`, formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
	}
}

export const authAPI = {
	me() {
		return instance.get<ResponseHeaderType>(`auth/me`)
	},
	login(data: FormDataType) {
		return instance.post<ResponseType<{ userID: number }>>('auth/login', data)
			.then(res => res.data)
	},
	logout() {
		return instance.delete<ResponseType>(`auth/login`)
			.then(res => res.data)
	}
}


