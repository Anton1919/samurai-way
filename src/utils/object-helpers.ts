import {UserType} from "../Redux/users-reducer";

export const updateObjectInArray = (items: UserType[], itemId: number, newObjProps: { followed: boolean }) => {
	return items.map(u => {
		if (u.id === itemId) {
			return {...u, ...newObjProps}
		}
		return u
	})
}


