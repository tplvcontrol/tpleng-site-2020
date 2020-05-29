import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';
import Layout from '../components/layout';
import GridItem from '../components/grid-item';
import SEO from '../components/SEO';
import { ChildImageSharp } from '../types';
import Toggle from '../ToggleRPC';
import { buttonStyle } from 'styled-system';

type PageProps = {
	data: {
		firstProject: {
			title: string;
			slug: string;
			cover: ChildImageSharp;
		};
		threeProjects: {
			nodes: {
				title: string;
				slug: string;
				cover: ChildImageSharp;
			}[];
		};
		aboutUs: ChildImageSharp;
		instagram: ChildImageSharp;
	};
};

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
grid-template-rows: 35vw 40vw;
  grid-template-areas:
    'about-us about-us'
	'three-projects instagram';

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 35vw 45vw;

    grid-template-areas:
      'about-us about-us about-us about-us'
      'three-projects three-projects instagram instagram';
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 38vw);

    grid-template-areas:
      'about-us about-us'
      'three-projects instagram';
  }

  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 50vw);

    grid-template-areas:
      'about-us'
      'three-projects'
	  'instagram';
  }
`;
{
	/* 
const FirstProject = styled(GridItem)`
  grid-area: first-project;
`;
*/
}
const AboutUs = styled(GridItem)`
  grid-area: about-us;
`;

const ThreeProjects = styled.div`
	grid-area: three-projects;
	display: grid;
	grid-template-columns: repeat(1, 1fr);

	@media (max-width: ${(props) => props.theme.breakpoints[1]}) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}
`;

const Instagram = styled(GridItem)`
  grid-area: instagram;
`;

const Index: React.FunctionComponent<PageProps> = ({ data: { firstProject, threeProjects, aboutUs, instagram } }) => {
	const pageAnimation = useSpring({
		config: config.slow,
		from: { opacity: 0 },
		to: { opacity: 1 }
	});

	return (
		<Layout>
			<SEO />
			<Area style={pageAnimation}>
				<div className="numeros-float">
					<Toggle>
						{({ on, toggle }) => (
							<Fragment>
								<img onClick={toggle} className="numeros-art" src="./numeros-btn-2019.svg" alt=" " />
								{on && (
									<img
										onClick={toggle}
										className="numeros-art-open"
										src="./numeros-info-2019.svg"
										alt=" "
									/>
								)}
							</Fragment>
						)}
					</Toggle>
				</div>
				{/* 	<FirstProject to={firstProject.slug} aria-label={`View project "${firstProject.title}"`}>
					<Img fluid={firstProject.cover.childImageSharp.fluid} />
					<span>{firstProject.title}</span>
				</FirstProject>*/}

				<AboutUs to="/quem-somos" aria-label="Visit my about page">
					<Img fluid={aboutUs.childImageSharp.fluid} />
					<span>Quem Somos</span>
				</AboutUs>
				<ThreeProjects>
					{threeProjects.nodes.map((project) => (
						<GridItem to={project.slug} key={project.slug} aria-label={`View project "${project.title}"`}>
							<Img fluid={project.cover.childImageSharp.fluid} />
							<span>{project.title}</span>
						</GridItem>
					))}
				</ThreeProjects>
				<Instagram to="/nossos-clientes" aria-label="See my Instagram pictures">
					<Img fluid={instagram.childImageSharp.fluid} />
					<span>Nossos Clientes </span>
				</Instagram>
			</Area>
		</Layout>
	);
};

export default Index;

export const query = graphql`
	query Index {
		firstProject: projectsYaml {
			title
			slug
			cover {
				childImageSharp {
					fluid(quality: 95, maxWidth: 1200) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
		threeProjects: allProjectsYaml(limit: 1, skip: 2) {
			nodes {
				title
				slug
				cover {
					childImageSharp {
						fluid(quality: 95, maxWidth: 1200) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
		aboutUs: file(
			sourceInstanceName: { eq: "images" }
			name: { eq: "Solar-panels-wind-turbines-electricity-pylon-tn" }
		) {
			childImageSharp {
				fluid(quality: 95, maxWidth: 1200) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		instagram: file(sourceInstanceName: { eq: "images" }, name: { eq: "clients-main-01" }) {
			childImageSharp {
				fluid(quality: 95, maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
