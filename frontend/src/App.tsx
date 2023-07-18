import React from 'react';
import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Contact } from './layouts/Contact/Contact';
import { Route } from 'react-router-dom';
import { Service } from './layouts/ServicePage/Service';
import CompanyPage from './layouts/Company/Company';
import { Career } from './layouts/Career/Career';
import { Apply } from './layouts/Apply/Apply';

function App() {
	return (
		<div>
			<Navbar />
			<Route path='/home'>
				<HomePage />
			</Route>
			<Route path='/contact'>
				<Contact />
			</Route>
			<Route path='/service'>
				<Service />
			</Route>
			<Route path='/company'>
				<CompanyPage />
			</Route>
			<Route path='/career'>
				<Career />
			</Route>
			<Route path='/apply'>
				<Apply />
			</Route>
			<Footer />
		</div>
	);
}

export default App;
