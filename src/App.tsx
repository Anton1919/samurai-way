import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/Profile.container";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderContainer/>
				<NavBar/>
				<div className="app-wrapper-content">

					<Switch>
						<Route path="/dialogs" render={() => <DialogsContainer/>}/>
						<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
						<Route path="/users" render={() => <UsersContainer/> }/>
						<Route path="/news" component={News}/>
						<Route path="/music" component={Music}/>
						<Route path="/settings" component={Settings}/>

						<Route path='/login' render={() => <Login />} />
						<Route exact path='/' render={() => <ProfileContainer/>} />

						<Route path='/404' component={() => <h1>PAGE NOT FOUND</h1>} />
						<Redirect from={'*'} to={'/404'}/>

					</Switch>

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
