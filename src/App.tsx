import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ActionsType, StoreType} from "./Redux/store";
import {RootStoreType} from "./Redux/redux-store";

type AppPropsType = {
	state: RootStoreType
	dispatch: (action: ActionsType) => void
	store: StoreType
}

const App = (props: AppPropsType) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<NavBar/>
				<div className="app-wrapper-content">

					<Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
					<Route path="/profile" render={() => <Profile store={props.store}/>}
					/>
					<Route path="/news" component={News}/>
					<Route path="/music" component={Music}/>
					<Route path="/settings" component={Settings}/>

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
