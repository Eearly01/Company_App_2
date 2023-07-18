import React from 'react';

export const Career = () => {
	return (
		<div className='container'>
			<h1 className='display-4'>Join Our Team</h1>
			<p>
				At Mangus LLC, we are always looking for talented individuals who are
				passionate about startups and want to make a difference. Join our team
				and be part of a dynamic consulting firm that helps startups thrive.
			</p>

			<h2 className='mt-5'>Current Openings</h2>
			<ul className='list-group'>
				<li className='list-group-item'>
					<h3>Startup Consultant</h3>
					<p>
						We are seeking experienced startup consultants who can provide
						strategic guidance to our clients. The ideal candidate should have a
						deep understanding of the startup ecosystem and proven experience in
						advising early-stage companies.
					</p>
					<p>Responsibilities:</p>
					<ul>
						<li>Conduct market research and analysis</li>
						<li>Develop business strategies and recommendations</li>
						<li>Assist in fundraising efforts</li>
						<li>
							Provide guidance on product development and market positioning
						</li>
					</ul>
					<p>Requirements:</p>
					<ul>
						<li>5+ years of consulting experience</li>
						<li>Strong knowledge of startup operations</li>
						<li>Excellent communication and presentation skills</li>
						<li>Ability to work in a fast-paced, dynamic environment</li>
					</ul>
					<a href='/apply' className='btn btn-primary'>
						Apply Now
					</a>
				</li>

				<li className='list-group-item'>
					<h3>Business Development Manager</h3>
					<p>
						We are looking for a skilled Business Development Manager to expand
						our client base and forge strong relationships with key
						stakeholders. The ideal candidate should have a track record of
						driving business growth and a deep understanding of the startup
						ecosystem.
					</p>
					<p>Responsibilities:</p>
					<ul>
						<li>Identify and pursue new business opportunities</li>
						<li>Nurture and maintain relationships with clients</li>
						<li>
							Collaborate with internal teams to develop tailored solutions
						</li>
						<li>Participate in networking events and industry conferences</li>
					</ul>
					<p>Requirements:</p>
					<ul>
						<li>Proven experience in business development or sales</li>
						<li>Strong network within the startup community</li>
						<li>Excellent negotiation and communication skills</li>
						<li>Self-motivated and target-driven</li>
					</ul>
					<a href='/apply' className='btn btn-primary'>
						Apply Now
					</a>
				</li>
			</ul>

			<p>
				If you are interested in joining our team and believe you have the
				skills and passion to contribute to our startup consulting service,
				please submit your resume and cover letter to{' '}
				<a href='mailto:careers@mangus.com'>careers@mangus.com</a>.
			</p>
		</div>
	);
};
