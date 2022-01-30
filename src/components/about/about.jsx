import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from '../../components/themes/Themes';

// import LogoComponent from '../subComponents/LogoComponent';
// import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../../subComponents/ParticleComponent';

import BigTitle from '../../subComponents/BigTitle'
import astronaut from '../../image/me.jpg'
import sun from '../../image/ball.png'

const Box = styled.div`
background-color: ${props => props.theme.body};3
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
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
position: absolute;
top: 50%;
right: 23%;
width: 15vw;
// animation: ${float} 2s ease infinite;
z-index:0;
transform: scaleY(-1);
// &:hover {
    
//     img{
//         width: 160%;
//     }
// }
img{
    width: 150%;
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
  
  
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                {/* <LogoComponent theme='dark'/> */}
                {/* <SocialIcons theme='dark'/> */}
                {/* <PowerButton /> */}
                <ParticleComponent theme='dark' />
                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>  
                <Waterman>
                    <img src={sun} alt="sun" />
                </Waterman>
                <Main>
                    A little story about me:
                    <br/> <br />
                    I was a master-degree computer-science student in Taiwan back in 2021, but I realized I want to focus on what
                    motivates me the most: Fronted-Development.
                    <br />
                    Instead of spending more time studying everything, I decided to drop out from the "degree" and look for an opportunity to build my career.
                    <br /> <br/>
                    There are some of my little projects down below.
                    {/* I am a very easy-going, open-minded person. I like to be around with people. I had played in school basketball team for many years which makes me a good team-player. */}
                    <br/> <br/>
                    {/* I believe everything is an Art when you put your consciousness in it. You can connect with me via social links. */}
                    
                </Main>
                <BigTitle text="Let's Go" top="10%" left="7%" />
            </Box>
        </ThemeProvider>
        
    )
}

export default AboutPage