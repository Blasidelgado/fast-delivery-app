import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<header>
				<nav>
					<Link to="login">Login</Link>
				</nav>
			</header>
			<main>
					<h1>Welcome to my delivery app</h1>
			</main>
		</>
	);
};

export default Home;
