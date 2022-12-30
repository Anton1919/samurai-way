import {ActionsType, PostsType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState: ProfilePageType = {
	posts: [
		{id: 1, message: 'Hello', likesCount: 11},
		{id: 2, message: 'It is my first post', likesCount: 22}
	],
	newPostText: ''
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
		default:
			return state
	}
}

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

export default profileReducer
