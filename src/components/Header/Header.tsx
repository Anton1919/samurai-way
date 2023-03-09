import React from 'react';
import s from "./Header.module.css"
import {useAppSelector} from "../../Redux/redux-store";
import {logoutTC} from "../../Redux/auth-reducer";
import {useDispatch} from "react-redux";

const Header = () => {
	const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
	const dispatch = useDispatch()
	return (
		<header className={s.header}>
			<img
				src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
				alt="img"/>
			<div className={s.loginBlock}>
				{isAuth && <button onClick={() => dispatch(logoutTC())}>Log out</button>}
			</div>
		</header>
	);
};

export default Header;