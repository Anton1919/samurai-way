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
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

// type AppPropsType = {
// 	state: RootStoreType
// 	dispatch: (action: ActionsType) => void
// 	store: StoreType
// }

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<NavBar/>
				<div className="app-wrapper-content">

					<Route path="/dialogs" render={() => <DialogsContainer/>}/>
					<Route path="/profile" render={() => <Profile/>}/>
					<Route path="/users" render={() => <UsersContainer/> }/>
					<Route path="/news" component={News}/>
					<Route path="/music" component={Music}/>
					<Route path="/settings" component={Settings}/>

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
