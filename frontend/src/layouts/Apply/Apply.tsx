import React from 'react';

export const Apply = () => {
	return (
		<div className='p-4'>
			<h1 className='mb-4'>Apply Now</h1>
			<p>
				To apply for a position at Mangus LLC, please fill out the form below
				and attach your resume and cover letter.
			</p>
			<form>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Full Name
					</label>
					<input
						type='text'
						className='form-control'
						id='name'
						placeholder='Enter your full name'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='email' className='form-label'>
						Email Address
					</label>
					<input
						type='email'
						className='form-control'
						id='email'
						placeholder='Enter your email address'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='phone' className='form-label'>
						Phone Number
					</label>
					<input
						type='tel'
						className='form-control'
						id='phone'
						placeholder='Enter your phone number'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='position' className='form-label'>
						Position
					</label>
					<select className='form-select' id='position'>
						<option value=''>Select a position</option>
						<option value='startup-consultant'>Startup Consultant</option>
						<option value='business-development-manager'>
							Business Development Manager
						</option>
					</select>
				</div>

				<div className='mb-3'>
					<label htmlFor='resume' className='form-label'>
						Resume
					</label>
					<input type='file' className='form-control' id='resume' />
				</div>

				<div className='mb-3'>
					<label htmlFor='cover-letter' className='form-label'>
						Cover Letter
					</label>
					<textarea
						className='form-control'
						id='cover-letter'
						rows={5}
						placeholder='Enter your cover letter'></textarea>
				</div>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};
