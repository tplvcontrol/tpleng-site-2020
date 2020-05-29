import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { readableColor } from 'polished'
import 'typeface-work-sans'
import { Box, Flex } from '../elements'
import theme from '../../config/theme'
import reset from '../styles/reset'
import Logo from './logo'

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f6993f;
  }
  #nav-1 {
    display:block;
  }
  #nav-3 {
    display:block;
  }
  .numeros-float {
    transition: all 0.3s ease-in-out;
    position: fixed;
    bottom:15px;
    right:0;
    padding: 0 0 0 15px;
    background-color:#ea9023d9;
    z-index:9999999;

    width:127;
  }

  .numeros-btn {
    width:127px;
    height:72px;
  }
  .numeros-art {
    height:72px;
    width:118px;
    }

    .numeros-art-open {
      height:72px;
      width:418px;
      }


  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.bold};
    }
    
    h1 {
      font-size: ${theme.fontSizes[5]};
    }
    h2 {
      font-size: ${theme.fontSizes[4]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[2]};
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }

    .st0 {
      fill-rule:evenodd;
      clip-rule:evenodd;
      fill:#6d6e70;
    }
    .st1 {
      fill:#ea9023;
    }
    .st2 {
      fill:#6d6e70;
    }
    
    factoid-p {
      line-height:0;
    }

    .factoid-number {
      color:#c66131;
      font-size:2.5rem;
      line-height:0;
      font-family: 'Work Sans','-apple-system','Roboto','Helvetica','Arial',sans-serif;
      font-weight:700;
    }

    .service-intro {
      color: black;
      font-family: 'Work Sans','-apple-system','Roboto','Helvetica','Arial',sans-serif;
      letter-spacing: -0.003em;
--baseline-multiplier: 0.179;
--x-height-multiplier: 0.35;
line-height: 1.58;
    } 

.services-icon-1 {
  height:80px;
  text-align:right;
}

.services-icon-2 {
  height:80px;
}

.parent-services {
  display: grid;
  grid-template-columns: 1fr repeat(2, 3fr) 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  margin: 0 auto 0 auto;
  max-width: 700px;
  font-weight: 600;
  line-height: 1.25;
  }
  
.div1-services { grid-area: 1 / 1 / 2 / 2; text-align:right; }
.div2-services { grid-area: 1 / 2 / 2 / 3; }

.div3-services { grid-area: 2 / 1 / 3 / 2; text-align:right; }
.div4-services { grid-area: 2 / 2 / 3 / 3; }

.div5-services { grid-area: 3 / 1 / 4 / 2; text-align:right; }
.div6-services { grid-area: 3 / 2 / 4 / 3; }

.div7-services { grid-area: 4 / 1 / 5 / 2; text-align:right; }
.div8-services { grid-area: 4 / 2 / 5 / 3; }

.div9-services { grid-area: 1 / 3 / 2 / 4; }
.div10-services { grid-area: 1 / 4 / 2 / 5; text-align:left; }

.div11-services { grid-area: 2 / 3 / 3 / 4; }
.div12-services { grid-area: 2 / 4 / 3 / 5; text-align:left; }

.div13-services { grid-area: 3 / 3 / 4 / 4; }
.div14-services { grid-area: 3 / 4 / 4 / 5; text-align:left; }

.div15-services { grid-area: 4 / 3 / 5 / 4; }
.div16-services { grid-area: 4 / 4 / 5 / 5; text-align:left; }

.services-cell-content {
  align-self: center;
}

.services-right {
  text-align:right;
}

.fale-parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3fr, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  }
  
  .div1-fale { grid-area: 1 / 1 / 2 / 2; justify-items:start; padding:0 0 35px 0; }
  .div2-fale { grid-area: 1 / 2 / 2 / 3; justify-items:start; padding:0 0 35px 0; }
  .div3-fale { grid-area: 2 / 1 / 3 / 3; justify-items:start; }

  .wa-icon { width: 140px; }

  .book-div {
    margin: 9px 0 0 0;
  }

  .trabalhe-div {
    max-width: 550px;
  }

.fale-h3 {
    margin: 0;
    font-size:1.4rem;
font-weight: 700;
letter-spacing: 0;
  }

  .fale-grid-content-align {
    align-self:start;
  }

  .cliente-parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }
    
    
    .div1-cliente { grid-area: 1 / 1 / 2 / 2; }
    .div2-cliente { grid-area: 1 / 2 / 2 / 3; }
    .div3-cliente { grid-area: 1 / 3 / 2 / 4; }
    .div4-cliente { grid-area: 2 / 1 / 3 / 2; }
    .div5-cliente { grid-area: 2 / 2 / 3 / 3; }
    .div6-cliente { grid-area: 2 / 3 / 3 / 4; }
    .div7-cliente { grid-area: 3 / 1 / 4 / 2; }
    .div8-cliente { grid-area: 3 / 2 / 4 / 3; }
    .div9-cliente { grid-area: 3 / 3 / 4 / 4; }
    .div10-cliente { grid-area: 4 / 1 / 5 / 2; }
    .div11-cliente { grid-area: 4 / 2 / 5 / 3; }
    .div12-cliente { grid-area: 4 / 3 / 5 / 4; }
    .div13-cliente { grid-area: 5 / 1 / 6 / 2; }
    .div14-cliente { grid-area: 5 / 2 / 6 / 4; }

    .cliente-marca {
      max-height:203px;
    }

    @media (max-width: 600px) {
      #nav-1 {
        display:none;
      }
      #nav-3 {
        display:none;
      }

      .numeros-float {
        display:none;
      }

      font-size: 16px;
      
      h1 {
        font-size: ${theme.fontSizes[4]};
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }

.div1-services { grid-area: 1 / 1 / 2 / 2; text-align:right; }
.div2-services { grid-area: 1 / 2 / 2 / 5; }

.div3-services { grid-area: 2 / 1 / 3 / 2; text-align:right; }
.div4-services { grid-area: 2 / 2 / 3 / 5; }

.div5-services { grid-area: 3 / 1 / 4 / 2; text-align:right; }
.div6-services { grid-area: 3 / 2 / 4 / 5; }

.div7-services { grid-area: 4 / 1 / 5 / 2; text-align:right; }
.div8-services { grid-area: 4 / 2 / 5 / 5; }

.div9-services { grid-area: 5 / 2 / 6 / 5; }
.div10-services { grid-area: 5 / 1 / 6 / 2; text-align:right; }

.div11-services { grid-area: 6 / 2 / 7 / 5; }
.div12-services { grid-area: 6 / 1 / 7 / 2; text-align:right; }

.div13-services { grid-area: 7 / 2 / 8 / 5; }
.div14-services { grid-area: 7 / 1 / 8 / 2; text-align:right; }

.div15-services { grid-area: 8 / 2 / 9 / 5; }
.div16-services { grid-area: 8 / 1 / 9 / 2; text-align:right; }

.services-right {
  text-align:left;
}

.div1-fale { grid-area: 1 / 1 / 2 / 3; justify-items:start; padding:0 0 35px 0; }
  .div2-fale { grid-area: 2 / 1 / 3 / 3; justify-items:start; padding:0 0 35px 0; }
  .div3-fale { grid-area: 3 / 1 / 4 / 3; justify-items:start;  }

  .cliente-parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }


  .div1-cliente { grid-area: 1 / 1 / 2 / 2; }
    .div2-cliente { grid-area: 1 / 2 / 2 / 3; }
    .div3-cliente { grid-area: 2 / 1 / 3 / 2; }
    .div4-cliente { grid-area: 2 / 2 / 3 / 3; }
    .div5-cliente { grid-area: 3 / 1 / 4 / 2; }
    .div6-cliente { grid-area: 3 / 2 / 4 / 3; }
    .div7-cliente { grid-area: 4 / 1 / 5 / 2; }
    .div8-cliente { grid-area: 4 / 2 / 5 / 3; }
    .div9-cliente { grid-area: 5 / 1 / 6 / 2; }
    .div10-cliente { grid-area: 5 / 2 / 6 / 3; }
    .div11-cliente { grid-area: 6 / 1 / 7 / 2; }
    .div12-cliente { grid-area: 6 / 2 / 7 / 3; }
    .div13-cliente { grid-area: 7 / 1 / 8 / 2; }
    .div14-cliente { grid-area: 7 / 2 / 8 / 3; }

    .cliente-marca {
      max-height:150px;
    }
      
      }
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Work Sans', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: white;
    font-size: 18px;
  }

  a {
    transition: all 0.3s ease-in-out;
    color: #0f8bff;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  a fale {
    font-weight: 700;
  }
  }
 
  
  ${reset}
`

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr;
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    grid-template-columns: ${props => props.theme.sidebarWidth.normal} 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`

const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  background: ${props => props.bg};

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }

  svg {
    fill: ${props => readableColor(`${props.bg}`)};
  }
`

const Nav = styled(Flex)<{ color: string }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 1.5;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[2]};
      margin-left: ${props => props.theme.space[4]};
    }

    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[1]};
      margin-left: ${props => props.theme.space[3]};
    }

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }
  }
`

const Main = styled.main`
  @media (min-width: calc(${props => props.theme.breakpoints[2]} + 1px)) {
    grid-column-start: 2;
  }
`

const Footer = styled.footer<{ color: string }>`
  position: fixed;
  width: ${props => props.theme.sidebarWidth.big};
  bottom: 0;

  background: ${props => props.color};

  color: ${props => readableColor(`${props.color}`, `${props.theme.colors.grey}`, '#c3c3c3')};

  a {
    color: ${props => readableColor(`${props.color}`)};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }
`

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: 'white',
}

interface QueryResult {
  navigation: {
    nodes: {
      name: string
      link: string
    }[]
  }
}

const Layout = ({ children, color }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <SideBarInner bg={color} as="aside" p={[6, 6, 8]}>
            <Flex
              flexWrap="nowrap"
              flexDirection={['row', 'row', 'row', 'column']}
              alignItems={['center', 'center', 'center', 'flex-start']}
              justifyContent="space-between"
            >
              <Box width={['5rem', '6rem', '7rem', '8rem']}>
                <Link to="/" aria-label="TPL, Back to Home">
                  <Logo />
                </Link>
              </Box>
              <Nav
                color={color}
                mt={[0, 0, 0, 10]}
                as="nav"
                flexWrap="nowrap"
                flexDirection={['row', 'row', 'row', 'column']}
                alignItems="flex-start"
              >
                {data.navigation.nodes.map(item => (
                  <PartialNavLink to={item.link} id={item.uid} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                ))}
              </Nav>
             
            </Flex>
          </SideBarInner>
          <Main>{children}</Main>
          <Footer color={color}>
            <Box p={[6, 6, 8]} fontSize={0}>
            071 99606-8360<br />
            <a href="mailto:comercial@tplengenharia.com.br">comercial@tplengenharia.com.br</a>
            <br /><br />
            &copy;2019 <a href="/">TPL Engenharia</a>
            </Box>
          </Footer>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.defaultProps = defaultProps

const query = graphql`
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
        uid
      }
    }
  }
`
