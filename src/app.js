import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './pages/adminPage';
import Home from './pages/homePage';
import Login from './pages/loginPage';
import Page404 from './pages/404Page';
import Register from './pages/registerPage';
import UserPage from './pages/userPage';

const App = () => {
    return (
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="user" element={<UserPage />} />
					<Route path="admin" element={<AdminPage />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
      </BrowserRouter>
    );
};

export default App;
