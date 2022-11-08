import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/container/home';

const App = () => {
    return (
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
      </BrowserRouter>
    );
};

export default App;
