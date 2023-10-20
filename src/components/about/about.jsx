import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from '../../components/themes/Themes';
import Navbar from "../navbar/Navbar";
import ParticleComponent from '../../subComponents/ParticleComponent';

import BigTitle from '../../subComponents/BigTitle'
import astronaut from '../../image/me.jpg'
import sun from '../../image/earth.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`

const Spaceman = styled.div`
position: absolute;
top: 12%;
right: 5%;
width: 22vw;
animation: ${float} 4s ease infinite;
z-index:1;
img{
    width: 100%;
    height: auto;
    border-radius:50%;
    border: rgba(243, 245, 39, 0.3) solid 1px;
}
`

const Waterman = styled.div`
animation: App-logo-spin infinite 20s linear;
position: absolute;
top: 50%;
right: 23%;
width: 15vw;
animation: ${float} 6s ease infinite;
z-index:0;
// transform: scaleY(-1);
&:hover {
    animation: ${rotate} 18s ease infinite;
}
img{
    width: 170%;
    height: auto;
    border-radius:50%:
    transform: scaleX(-1);
}
`

const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  @media screen and (max-width: 900px) {
      font-size 20px;
      height: 80vh;
  }
  @media screen and (max-width: 1450px) {
      height: 70vh;
  }
`

const AboutPage = () => {
    return (
        <>
        <Navbar />
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <ParticleComponent theme='dark' />
                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>  
                <Waterman>
                    <img src={sun} alt="sun" />
                </Waterman>
                <Main>
                    👋 Hi, my name is Lee Chi, a Full-Stack Developer based in Helsinki.
                    <br /><br />
                    I graduated from National Formosa University in Taiwan. I have a background in business and several years of experience in marketing work. However, when I had the opportunity to design a webpage for my previous work, I fell in love with coding. Ever since then, I have been passionate about programming and dedicated to improving and expanding my technical skills every single day.
                    <br/><br/>
                    I am currently training in Integrify's Full Stack program to further enhance my knowledge in back-end technology. I thoroughly enjoy the challenges provided by the program, as they allow me to constantly improve and strive to be better than I was yesterday. I am eagerly looking forward to transitioning into a full-time position as a full stack developer, where I can utilize my skills to solve real-world problems.
                </Main>
                <BigTitle text="Welcome" top="10%" left="7%" />
            </Box>
        </ThemeProvider>
       </> 
    )
}

export default AboutPage