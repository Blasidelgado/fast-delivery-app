// Imports de React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Imports de Redux
// import { Provider } from 'react-redux';

import App from './App';

// Importamos las hojas de estilos
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // <AppRoutingExercise />
);
