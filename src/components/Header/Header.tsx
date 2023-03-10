import React from 'react';
import s from "./Header.module.css"
import {useAppSelector} from "../../Redux/redux-store";
import {logoutTC} from "../../Redux/auth-reducer";
import {useDispatch} from "react-redux";
import svg from '../../assets/img/React.svg'

const Header = () => {
	const isAuth = useAppSelector<boolean>((state) => state.auth.isAuth)
	const dispatch = useDispatch()
	return (
		<header className={s.header}>
			<div className={s.logo}>
				<img
					src={svg}
					alt="img"/>
				<h1>Samurai social media </h1>
			</div>

			<div className={s.loginBlock}>
				{isAuth && <button onClick={() => dispatch(logoutTC())}>Log out</button>}
			</div>
		</header>
	);
};

export default Header;