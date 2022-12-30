import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
	profileReducer,
	dialogsPage: dialogsReducer,
	sidebarReducer,
	usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers)


// @ts-ignore
window.store = store

export default store