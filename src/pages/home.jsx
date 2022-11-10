import React from 'react';
import { Link } from 'react-router-dom';
import HomeMain from '../components/container/homeMain';
import HeaderUnlogged from '../components/pure/headerUnlogged';

const Home = () => {
	return (
		<>
			<header>
				<HeaderUnlogged />
			</header>
			<main>
				<HomeMain />
				<section className="bottom-section">
					<h3>
						Te llevamos el agua cuando
						<span> VOS </span>
						quieras
					</h3>
					<div className="home-bottomdiv">
					<button type="button">
						<Link to="Login">Login </Link>
					</button>
					<button type="button">
						<Link to="Register">Register </Link>
					</button>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
