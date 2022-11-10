import React from 'react';
import { Link } from 'react-router-dom';

const HeaderUnlogged = () => {
	return (
		<>
			<nav>
				<img src="/images/logo.png" alt="logo" />
				<div className="button-div">
					<button type="button">
						<Link to="Login">Login </Link>
					</button>
					<button type="button">
						<Link to="Register">Register </Link>
					</button>
				</div>
			</nav>
		</>
	);
};

export default HeaderUnlogged;
