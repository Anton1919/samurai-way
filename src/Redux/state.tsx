import {rerenderEntireTree} from "../render";

export type PostsType = {
	id: number
	message: string
	likesCount: number
}

export type DialogsType = {
	id: number
	name: string
}

export type MessagesType = {
	id: number
	message: string
}

export type StateType = {
	profilePage: {
		posts: PostsType[]
		newPostText: string
	}
	dialogsPage: {
		dialogs : DialogsType[]
		messages: MessagesType[]
	}
}

let state: StateType = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hello', likesCount: 11},
			{id: 2, message: 'It is my first post', likesCount: 22}
		],
		newPostText: ''
	},
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Dimych'},
			{id: 2, name: 'Masha'},
			{id: 3, name: 'Anton'},
			{id: 4, name: 'Sasha'},
			{id: 5, name: 'Vasya'},
			{id: 6, name: 'Olga'},
		],
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Yo'},
			{id: 4, message: 'Yo'},
			{id: 6, message: 'Buy'},
		]
	}
}

export const addPost = () => {
	let newPost: PostsType = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}

export default state