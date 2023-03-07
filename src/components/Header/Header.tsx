import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../Redux/redux-store";
import {logoutTC} from "../../Redux/auth-reducer";
import {useDispatch} from "react-redux";

type PropsType = {
	isAuth: boolean
	login: string | null
}

const Header = (props: PropsType) => {
	const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
	const dispatch = useDispatch()
	return (
		<header className={s.header}>
			<img
				src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
				alt="img"/>
			<div className={s.loginBlock}>
				{/*{props.isAuth*/}
				{/*	? props.login*/}
				{/*	: <NavLink to={'/login'}>Login</NavLink>*/}
				{/*}*/}
				{isAuth && <button onClick={() => dispatch(logoutTC())}>Log out</button>}
			</div>
		</header>
	);
};

export default Header;