import { AppBar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeMain from '../components/container/homeMain';
import ButtonAppBar from '../components/pure/basicAppBar';
import HeaderUnlogged from '../components/pure/headerUnlogged';

const Home = () => {
	return (
		<>
				<ButtonAppBar />
				{/* <HeaderUnlogged /> */}
			<main>
				<HomeMain />
				<section className="bottom-section">
					<h3>
						Get your water whenever
						<span> YOU </span>
						want
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
