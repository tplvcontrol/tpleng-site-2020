import React from 'react';
import Img from 'gatsby-image';
import clienteMarca1 from '../images/logo-renova-energia.png';
import clienteMarca2 from '../images/clientes_coelba-100x75.jpg';
import clienteMarca3 from '../images/clientes_dow-100x75.jpg';
import clienteMarca4 from '../images/clientes_chesf-100x75.jpg';
import clienteMarca5 from '../images/clientes_alcan-100x75.jpg';
import clienteMarca6 from '../images/clientes_codevasf-100x75.jpg';
import clienteMarca7 from '../images/clientes_erb-100x75.jpg';
import clienteMarca8 from '../images/clientes_contax-100x75.jpg';
import clienteMarca9 from '../images/clientes_abengoa-100x75.jpg';
import clienteMarca10 from '../images/clientes_jpnor-100x75.jpg';
import { config, useSpring } from 'react-spring';
import Layout from '../components/layout';
import { AnimatedBox } from '../elements';
import SEO from '../components/SEO';

const About = () => {
	const pageAnimation = useSpring({
		config: config.slow,
		from: { opacity: 0 },
		to: { opacity: 1 }
	});

	return (
		<Layout>
			<SEO title="Nossos Clientes | TPL Engenharia" desc="Hi. Desc here." />
			<AnimatedBox style={pageAnimation} py={[ 6, 6, 6, 8 ]} px={[ 6, 6, 8, 6, 8, 13 ]}>
				<h1>Nossos Clientes</h1>
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 40px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca1}
				/>
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca2}
				/>
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca3}
				/>
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca4}
				/>

				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca5}
				/>
				<br />
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca6}
				/>
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca7}
				/>
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca8}
				/>
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca9}
				/>
				<img
					style={{
						height: '65px',
						width: '100',
						padding: '20px 20px 20px 20px'
						// border: '2px solid red'
					}}
					src={clienteMarca10}
				/>
			</AnimatedBox>
		</Layout>
	);
};

export default About;
