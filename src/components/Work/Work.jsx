import react, { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from '../../components/themes/Themes';
import Navbar from "../navbar/Navbar";
import ParticleComponent from '../../subComponents/ParticleComponent';
// import BigTitle from '../../subComponents/BigTitle'
import { BigTitle } from '../../subComponents/BigTitle'
import Card from '../../subComponents/Card'
import { products } from "../../data";
import {motion} from 'framer-motion';


const Box = styled.div`
background-color: ${props => props.theme.body};
height:200vh;
position: relative;
display: flex;
align-items: center;
color:white;
`

// const Main = styled(motion.ul)`
// position: fixed;
// top: 12rem;
// left:calc(10rem + 15vw);
// height: 40vh;
// display: flex;
// color:white;
// `

const Work = () => {

    // const ref = useRef(null);

    // useEffect(() => {
    //     let element = ref.current;
       
        
    //     const rotate = () => {
         
    //      element.style.transform = `translateX(${-window.pageYOffset}px)`
      
         
    //       return (yinyang.current.style.transform =
    //         'rotate(' + -window.pageYOffset + 'deg)')
    //     }
    
    //     window.addEventListener('scroll', rotate)
    //     return () => {
    //       window.removeEventListener('scroll', rotate);
          
    //     }
    //   }, [])

    

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                {/* <Main ref={ref} initial='hidden' animate='show'  > */}
                {/* <Main> */}
                    {/* {
                        Work.map( d => 
                        <Card key={d.id} data={d} />
                        )
                    } */}

                    {products.map((item) => (
                        <Card key={item.id} name={item.name}  />
                    ))}
                {/* <div>
                    <Card products={products}/>
                </div> */}
                    
                {/* </Main> */}
                {/* <BigTitlte text="WORK" top='10%' right="20%" /> */}
            </Box>

        </ThemeProvider>
        
    )
}


export default Work;