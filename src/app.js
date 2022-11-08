import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './pages/adminPage';
import Home from './pages/home';
import Login from './pages/login';
import Page404 from './pages/page404';
import Register from './pages/register';
import UserPage from './pages/userPage';

const App = () => {
    return (
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="user" element={<UserPage />} />
					<Route path="admin:id" element={<AdminPage />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
      </BrowserRouter>
    );
};

export default App;
