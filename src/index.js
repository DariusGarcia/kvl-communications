import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Services from './Routes/Services';
import Apps from './App';
import Payments from './Routes/Payments';
import Contact from './Routes/Contact';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './Components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='services' element={<Services />} />
					<Route path='about' element={<Apps />} />
					<Route path='payments' element={<Payments />} />
					<Route path='contact' element={<Contact />} />
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
