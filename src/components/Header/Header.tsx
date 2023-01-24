import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
	isAuth: boolean
	login: string | null
}

const Header = (props: PropsType) => {
	return (
		<header className={s.header}>
			<img
				src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
				alt="img"/>
			<div className={s.loginBlock}>
				{props.isAuth
					? props.login
					: <NavLink to={'/login'}>Login</NavLink>
				}

			</div>
		</header>
	);
};

export default Header;