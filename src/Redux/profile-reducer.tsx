import {ActionsType, PostsType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"


const profileReducer = (state: ProfilePageType, action: ActionsType ) => {

	switch (action.type) {
		case ADD_POST:
			const newPost: PostsType = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}
			state.posts.push(newPost)
			state.newPostText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newPostText
			return state
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
