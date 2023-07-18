import React, { useState } from 'react';

const ContactForm = () => {
	const [inquiryType, setInquiryType] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [company, setCompany] = useState('');
	const [title, setTitle] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [country, setCountry] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Perform any necessary form validation or data processing
		// For example, you can check if the required fields are filled

		if (
			!inquiryType ||
			!firstName ||
			!lastName ||
			!company ||
			!title ||
			!email ||
			!country
		) {
			// Handle form validation errors
			return;
		}

		// Handle form submission here
		// You can send the form data to a server or perform any other desired actions

		// Example: Log the form data to the console
		console.log({
			inquiryType,
			firstName,
			lastName,
			company,
			title,
			email,
			phone,
			country,
		});

		// Reset the form after submission
		setInquiryType('');
		setFirstName('');
		setLastName('');
		setCompany('');
		setTitle('');
		setEmail('');
		setPhone('');
		setCountry('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='px-4'>
			<div className='form-group'>
				<div className='col-12'>
					<label htmlFor='inboundInquiryTypeForWebForm' className='form-label'>
						Select the team that you would like to contact
					</label>
					<select
						id='inboundInquiryTypeForWebForm'
						name='inboundInquiryTypeForWebForm'
						value={inquiryType}
						onChange={(e) => setInquiryType(e.target.value)}
						className='form-select'
						required>
						<option value=''>Select...</option>
						<option value='Client services'>Client services</option>
						<option value='General'>All other inquiries</option>
					</select>
				</div>
			</div>
			<div className='form-group'>
				<div className='col-12'>
					<label htmlFor='FirstName' className='form-label'>
						First name
					</label>
					<input
						id='FirstName'
						name='FirstName'
						type='text'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						className='form-control'
						required
					/>
				</div>
			</div>
			<div className='form-group mktoFormRow'>
				<div className='col-12'>
					<label htmlFor='LastName' className='form-label'>
						Last name
					</label>
					<input
						id='LastName'
						name='LastName'
						type='text'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						className='form-control mktoField mktoTextField mktoHasWidth mktoRequired'
						required
					/>
				</div>
			</div>
			<div className='form-group mktoFormRow'>
				<div className='col-12'>
					<label htmlFor='Company' className='form-label'>
						Organization
					</label>
					<input
						id='Company'
						name='Company'
						type='text'
						value={company}
						onChange={(e) => setCompany(e.target.value)}
						className='form-control mktoField mktoTextField mktoHasWidth mktoRequired'
						required
					/>
				</div>
			</div>
			<div className='form-group mktoFormRow'>
				<div className='col-12'>
					<label htmlFor='Title' className='form-label'>
						Job title
					</label>
					<input
						id='Title'
						name='Title'
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className='form-control mktoField mktoTextField mktoHasWidth mktoRequired'
						required
					/>
				</div>
			</div>
			<div className='form-group mktoFormRow'>
				<div className='col-12'>
					<label htmlFor='Email' className='form-label'>
						Email
					</label>
					<input
						id='Email'
						name='Email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='form-control mktoField mktoEmailField mktoHasWidth mktoRequired'
						required
					/>
				</div>
			</div>
			<div className='form-group mktoFormRow'>
				<div className='col-12'>
					<label htmlFor='Phone' className='form-label'>
						Phone
					</label>
					<input
						id='Phone'
						name='Phone'
						type='tel'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className='form-control mktoField mktoPhoneField mktoHasWidth'
					/>
				</div>
			</div>
			<div className='form-group mktoFormRow'>
				<div className='col-12'>
					<label htmlFor='Country' className='form-label'>
						Location
					</label>
					<input
						id='Country'
						name='Country'
						type='text'
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						className='form-control mktoField mktoTextField mktoHasWidth mktoRequired'
						required
					/>
				</div>
			</div>
			<div className='form-group mktoButtonRow'>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
