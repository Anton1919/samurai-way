import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ActionsType, StateType, StoreType} from "./Redux/state";

type AppPropsType = {
	state: StateType
	dispatch: (action: ActionsType) => void
	store: StoreType
}

const App = (props: AppPropsType) => {
	console.log(props)
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<NavBar/>
				<div className="app-wrapper-content">

					<Route path="/dialogs" render={() => <Dialogs store={props.store}/>}/>
					<Route path="/profile" render={() => <Profile
						profilePage={props.state.profilePage}
						dispatch={props.dispatch.bind(props.store)}
					/>}
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
