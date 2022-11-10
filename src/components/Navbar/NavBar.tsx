import React from 'react';
import s from "./NavBar.module.css"

const NavBar = () => {
	return (
		<nav className={s.nav}>
			<div><a href="src/components/Navbar/NavBar#" className={s.item}>Profile</a></div>
			<div><a href="src/components/Navbar/NavBar#" className={s.item}>Messages</a></div>
			<div><a href="src/components/Navbar/NavBar#" className={s.item}>News</a></div>
			<div><a href="src/components/Navbar/NavBar#" className={s.item}>Music</a></div>
			<div><a href="src/components/Navbar/NavBar#" className={s.item}>Settings</a></div>
		</nav>
	);
};

export default NavBar;