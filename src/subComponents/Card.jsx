import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './card.css'
import { AiOutlineGithub } from 'react-icons/ai'

const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: black;
color: white;
padding: 1.5rem 2rem;
margin-right: 4rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid white;
transition: all 0.2s ease;
z-index:1;
background-image:url:(${props =>props.img});
// over-flow:hidden;


&:hover{
background-color: white;
color:black;
border: 1px solid black;
cursor:pointer
}
`

const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`
const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const Tags = styled.div`
border-top: 2px solid white;
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid black;
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: white;
color: black;
text-decoration: none;
padding:0.9rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);
${Box}:hover &{
    background-color: #59b256;
    color: white;
}
`

const Git = styled.a`
color: inherit;
text-decoration: none;
background-color: ;
border-radius: 50px;

${Box}:hover &{
    // &>*{
    //     fill:${props =>props.theme.text};
    // }
    color:black;
    background-color:black;
}
`

const Card = (props) =>
{
    return (
        <>
        <Box props={props.img}>
            <Title>{props.name}</Title>
            <Description>
                {props.description}
            </Description>
            <Tags>
            {props.tags.map((t,id) => {
                return <Tag key={id}>#{t}</Tag>
                })
            }
            </Tags>
            <Footer>        
                <Link href={props.link} target="_blank" rel="noopener noreferrer">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <div>
                            Visit
                        </div>
                    </a> 
                </Link>                  
                <Git href={props.git}>
                    <a href={props.git}>
                        <AiOutlineGithub
                        size="30px"
                        cursor="pointer"
                        style={{
                            position: 'relative',
                            padding: '15px',
                            cursor: 'pointer',
                            color: 'white'
                        }} />
                    </a>
                </Git>
            </Footer>            
        </Box>
    </>
    )
}

export default Card