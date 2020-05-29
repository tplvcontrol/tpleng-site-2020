import React from 'react';
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
			<SEO title="Serviços | TPL Engenharia" desc="Hi. Desc here." />
			<AnimatedBox style={pageAnimation} py={[ 6, 6, 6, 8 ]} px={[ 6, 6, 8, 6, 8, 13 ]}>
				<h1>Serviços</h1>
				<p>
					<h3>AREA DE ATUAÇÃO:</h3>
					<p class='service-intro'>Sempre orientados pela nossa meta de atender às necessidades dos nossos clientes de maneira integrada e com agregação de valor, desenvolvemos serviços que resultem em soluções completas, seguras, ágeis e acessíveis, atuando nos seguimentos de GERAÇÃO, TRANSMISSÃO e DISTRIBUIÇÃO de energia elétrica, com as seguintes atividades:</p>
			<ul class='service-list'>
			<li>Regularização Fundiária</li>
			<li>Serviços de Topografia</li>
			<li>Projetos e Construção de Redes de Média Tensão</li>
			<li>Construção de Linha de Transmissão</li>
			<li>Subestações</li>
			<li>Manutenção Elétrica de Redes e Substações</li>
			<li>Manutenção de Áreas Verdes em faixa de Servidão</li>
			<li>Iluminação Publica</li>
			</ul>
				</p>
			</AnimatedBox>
		</Layout>
	);
};

export default About;
