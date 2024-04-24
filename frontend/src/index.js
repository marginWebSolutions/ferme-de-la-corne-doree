import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './Utils/reset-css.scss';
import './Utils/variables.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// </React.StrictMode>
);

reportWebVitals();
