import React from 'react';
import s from "./Header.module.css"

const Header = () => {
	return (
		<header className={s.header}>
			<img
				src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
				alt="img"/>
		</header>
	);
};

export default Header;