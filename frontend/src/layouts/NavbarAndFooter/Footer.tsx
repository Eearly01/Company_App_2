import React from 'react';

export const Footer = () => {
	return (
		<div className='main-color' style={{ backgroundColor: '#333' }}>
			<footer className='container d-flex flex-wrap justify-content-between align-items-center py-5 main-color'>
				<p className='col-md-4 mb-0 text-white' style={{ fontWeight: 'bold' }}>
					Mangus LLC
				</p>
				<ul className='nav navbar-dark col-md-4 justify-content-end'>
					<li className='nav-item'>
						<a
							href='/'
							className='nav-link px-2 text-white'
							style={{ textDecoration: 'none' }}>
							Home
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='/service'
							className='nav-link px-2 text-white'
							style={{ textDecoration: 'none' }}>
							Services
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='about'
							className='nav-link px-2 text-white'
							style={{ textDecoration: 'none' }}>
							About
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='/career'
							className='nav-link px-2 text-white'
							style={{ textDecoration: 'none' }}>
							Career
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='/contact'
							className='nav-link px-2 text-white'
							style={{ textDecoration: 'none' }}>
							Contact
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};
