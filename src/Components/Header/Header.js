import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/friends">Friends</NavLink>
			<NavLink to="/about">About</NavLink>
		</nav>
	);
};

export default Header;
