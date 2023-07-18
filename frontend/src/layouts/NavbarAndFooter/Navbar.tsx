import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Navbar = () => {
	return (
		<nav
			className='navbar navbar-expand-lg navbar-light main-color py-3'
			style={{ backgroundColor: '#fff' }}>
			<div className='container-fluid'>
				<img className='logo' src={require("../../Images/Drawn/Logo.jpg")} alt="" />
				<span className='navbar-brand' style={{ color: '#000', fontWeight: 'bold' }}>
					CloudHWM
				</span>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle Navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavDropdown'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a href='/home' className='nav-link' style={{ color: '#000' }}>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a href='/signin' className='nav-link' style={{ color: '#000' }}>
								Database
							</a>
						</li>
						<li className='nav-item'>
							<a href='/company' className='nav-link' style={{ color: '#000' }}>
								Company
							</a>
						</li>
						<li className='nav-item'>
							<a href='/career' className='nav-link' style={{ color: '#000' }}>
								Career
							</a>
						</li>
						<li className='nav-item'>
							<a href='/contact' className='nav-link' style={{ color: '#000' }}>
								Contact
							</a>
						</li>
					</ul>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item m-1'>
							<a href='/signin' className='btn btn-outline-light' type='button'>
								Sign in
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
