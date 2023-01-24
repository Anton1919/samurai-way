import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/Profile.container";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderContainer/>
				<NavBar/>
				<div className="app-wrapper-content">

					<Route path="/dialogs" render={() => <DialogsContainer/>}/>
					<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
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
