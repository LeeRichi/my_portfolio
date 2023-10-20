import react, { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from '../../components/themes/Themes';
import Navbar from "../navbar/Navbar";
import ParticleComponent from '../../subComponents/ParticleComponent';

import  BigTitle  from '../../subComponents/BigTitle'
import Card from '../../subComponents/Card'
import { products } from "../../data";
import {motion} from 'framer-motion';

import React from 'react';


const Title = styled.h1`
    text-align:center;
    font-size:30px;
    margin-left:40vw;
    margin-top:-60vh;
    position:absolute;
    z-index:5;
    border-bottom: 2px solid white;
    padding-bottom: 15px;

    @media screen and (max-width: 900px) {
      margin-left:20vw;
  }
`

const Box = styled(motion.div)`
background-color: black;
height:100vh;
position: relative;
display: flex;
align-items: center;
color:white;
width:100vw;
overflow:hidden;
z-index:0;
`

const Main = styled(motion.ul)`
position: relative;
top: 0rem;
left:10vw;
height: 40vh;
display: flex;
color:white;
cursor:grab;
z-index:3;
`

const Work = () => {
    
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () =>
    {
        setWidth(window.innerWidth)
    }

    useEffect(() =>
    {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
        <Navbar />
        <ThemeProvider theme={DarkTheme}>
            <Box>                    
                <Title>
                    Drag here to see my works
                </Title>         
                <ParticleComponent theme='dark' />
                    <Main
                        initial='hidden'
                        animate='show'
                        drag='x'
                        dragConstraints={{ right: 0, left: width-1720 }}
                        dragMomentum={false}
                    >                   
                        {products.map((item) => (
                            <Card key={item.id} name={item.name} tags={item.tags} description={item.description} img={item.img} link={item.link} git={item.github}/>
                        ))}                              
                </Main>                   
            </Box>
        </ThemeProvider>
        </> 
    )
}



export default Work;