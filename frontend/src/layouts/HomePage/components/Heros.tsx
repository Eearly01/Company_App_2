import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Heros = () => {
	// Sample image URLs for the placeholders
	const image1 = 'https://via.placeholder.com/400x400';
	const image2 = 'https://via.placeholder.com/400x400';

	return (
		<div>
			<div className='main-color text-white py-5'>
				<Container>
					<Row>
						<Col lg={6}>
							<h1 className='display-4 font-weight-bold'>
								Unlock Your Business Potential
							</h1>
							<p className='lead' style={{ fontSize: '1.2rem' }}>
								We are a leading software consulting firm that helps businesses
								leverage technology to achieve their goals and drive growth.
							</p>
							<Button href='/service' variant='light' size='lg'>
								Explore Our Services
							</Button>
						</Col>
						<Col lg={6}>
							<img
								src={image1}
								alt='Consulting Services'
								className='img-fluid'
								style={{ borderRadius: '10px' }}
							/>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='bg-light py-5'>
				<Container>
					<Row>
						<Col lg={6} className='d-flex align-items-center'>
							<img
								src={image2}
								alt='Consulting Services'
								className='img-fluid'
								style={{ borderRadius: '10px' }}
							/>
						</Col>
						<Col lg={6}>
							<h2 className='mb-4 font-weight-bold'>Who We Are</h2>
							<p>
								At CloudHWM, we are a cutting-edge hardware company dedicated to
								revolutionizing server performance monitoring. Our team of
								passionate computer enthusiasts and experts in the field of
								hardware design and data analytics came together with a shared
								vision of empowering businesses to unleash the full potential of
								their server infrastructure. With a firm belief in the
								importance of proactive monitoring, we have crafted a
								state-of-the-art solution that goes beyond traditional methods.
								By harnessing the power of innovative technology and advanced
								algorithms, CloudHWM offers a unique hardware monitoring system
								that not only tracks the temperature of server hardware but also
								identifies potential performance drops before they escalate into
								critical issues. Our mission is to help businesses maintain
								optimal efficiency and reliability while delivering unmatched
								user experiences.
							</p>
							<p>
								Our mission is to empower businesses by leveraging cutting-edge
								technologies, driving innovation, and delivering exceptional
								results. We believe that successful digital transformation
								requires a strategic approach and a deep understanding of our
								clients' goals and challenges.
							</p>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='main-color text-white py-5 '>
				<Container>
					<Row className='d-flex justify-content-center'>
						<Col lg={6}>
							<h2 className='mb-4 font-weight-bold'>What We Offer</h2>
							<p>
								We offer a comprehensive suite of hardware monitoring solutions
								tailored to meet the diverse needs of modern enterprises. Our
								flagship product, the CloudHWM Temperature Monitor, is a
								sophisticated device that seamlessly integrates into your server
								infrastructure. It continuously collects real-time temperature
								data from all connected hardware components, creating detailed
								performance profiles for each device. But we don't stop there.
								Our cloud-based analytics platform further processes this data,
								utilizing machine learning algorithms to detect patterns,
								identify anomalies, and predict potential performance drops.
								Armed with these invaluable insights, businesses can make
								informed decisions, optimize their server setups, and mitigate
								costly downtime risks.
							</p>
							<p>
								Beyond the hardware and software solutions, we provide a
								dedicated team of experts to assist you at every step of the
								way. From initial setup to ongoing support, our knowledgeable
								staff ensures a smooth integration and maximizes the benefits of
								our monitoring system. We also take data security seriously,
								implementing robust encryption protocols to safeguard your
								sensitive information and maintain confidentiality.
							</p>
						</Col>
					</Row>
					<Row className='d-flex justify-content-center'>
						<Col lg={6}>
							<img
								src='https://via.placeholder.com/400x400'
								alt='Consulting Services'
								className='img-fluid'
								style={{ borderRadius: '10px' }}
							/>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='bg-light py-5'>
				<Container>
					<Row>
						<Col lg={6}>
							<h2 className='mb-4 font-weight-bold'>Why Choose Us</h2>
							<p>
								Choosing CloudHWM means choosing a proactive approach to server
								management and a commitment to excellence. Unlike traditional
								monitoring systems that simply react to performance issues, we
								empower businesses to stay ahead of the curve by detecting
								potential problems early on. Our product's ability to compare
								similar hardware devices to improve overall performance sets us
								apart from the competition. As a result, our clients have
								experienced up to 30% reduction in server-related downtime and
								substantial cost savings.
							</p>
							<p>
								Moreover, at CloudHWM, we pride ourselves on staying at the
								forefront of technology. Our team relentlessly pursues
								innovation and keeps our solutions updated to tackle emerging
								challenges in the fast-paced world of server hardware. We are
								constantly expanding our features and refining our algorithms,
								ensuring that our clients always benefit from state-of-the-art
								advancements.
							</p>
						</Col>
						<Col lg={6}>
							<img
								src={require('../../../Images/Hardware/juan-pablo-daniel-wKkB7tiMrnM-unsplash.jpg')}
								alt='Consulting Services'
								className='img-fluid'
								style={{ borderRadius: '10px' }}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Heros;
