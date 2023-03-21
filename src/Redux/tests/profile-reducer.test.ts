import profileReducer, {addPostActionCreator, upDateNewPostTextActionCreator} from "../profile-reducer";

let initialState: any = {}

beforeEach(() => {
	initialState = {
		posts: [
			{id: 1, message: 'Hello', likesCount: 11},
			{id: 2, message: 'It is my first post', likesCount: 22}
		],
		newPostText: '',
		profile: null,
		status: ''
	}
})

test("post text should be updated", () => {
	const action = upDateNewPostTextActionCreator("some string")
	const newState = profileReducer(initialState, action)
	expect(newState.newPostText).toEqual("some string")
})

test("new post should be added", () => {
	const action = addPostActionCreator()
	const newState = profileReducer(initialState, action)
	expect(newState.posts.at(-1)?.likesCount).toBe(0)
	expect(newState.posts.at(-1)?.message).toEqual("")
})

