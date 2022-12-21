import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./store";

const reducers = combineReducers({
	profileReducer: profileReducer,
	dialogsReducer: dialogsReducer,
	sidebarReducer: sidebarReducer
})

export type RootStoreType = ReturnType<typeof reducers>

const store: Store<RootStoreType> = createStore(reducers)

// const store: StoreType = createStore(reducers)

export default store