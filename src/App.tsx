import React, {useEffect} from 'react';
import s from './App.module.css'
import NavBar from "./components/Navbar/NavBar";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {useAppSelector} from "./Redux/redux-store";
import {useDispatch} from "react-redux";
import {getAuthUserData} from "./Redux/auth-reducer";
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import page404 from './assets/img/404.jpg'
import ProfileContainer from "./components/Profile/ProfileInfo/Profile.container";
import DialogsContainer from "./components/Dialogs/Dialogs-container";

const App = () => {
	const isInitialized = useAppSelector<boolean>((state) => state.auth.isInitialized)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAuthUserData())
	}, [])

	if (!isInitialized) {
		return <div
			style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
			<CircularProgress/>
		</div>
	}

	return (
		<HashRouter>
			<div className={s.appWrapper}>
				<HeaderContainer/>
				<div className={s.appWrapperContent}>
					<NavBar/>
					<div className={s.content}>
						<Switch>
							<Route path="/dialogs" render={() => <DialogsContainer/>}/>
							<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
							<Route path="/users" render={() => <UsersContainer/>}/>
							<Route path="/settings" component={Settings}/>
							<Route path='/login' render={() => <Login/>}/>
							<Route exact path='/' render={() => <ProfileContainer/>}/>
							<Route path='/404' component={() => <img style={{width: "70%"}} src={page404} alt={"img"}/>}/>
							<Redirect from={'*'} to={'/404'}/>
						</Switch>
					</div>
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
