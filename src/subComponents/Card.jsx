import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './card.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { CiTrophy } from 'react-icons/ci';

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
  z-index: 1;
  background-image: url(${props => props.img});

  @media screen and (max-width: 1450px) {
    height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid white;
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  background-color: white;
  color: black;
  text-decoration: none;
  padding: 0.9rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  &:hover {
    background-color: #59b256;
    color: white;
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  border-radius: 50px;

  ${Box}:hover & {
    color: black;
    background-color: black;
  }
`;

const Card = (props) => {
  return (
    <Box props={props.img}>
      <Title>
        {props.trophy && (
          <CiTrophy
            size={24}
            style={{
              verticalAlign: 'middle',
              marginRight: '6px',
              marginTop: '-5px',
              color: 'gold',
            }}
          />
        )}
        {props.name}
        {props.status && (
          <span
            className="badge"
            style={{
              verticalAlign: 'middle',
              marginLeft: '8px',
              marginTop: '2px',
              display: 'inline-block',
            }}
          >
            {props.status}
          </span>
        )}
      </Title>
      <Description>{props.description}</Description>
      <Tags>
        {props.tags.map((t, id) => (
          <Tag key={id}>#{t}</Tag>
        ))}
      </Tags>
      <Footer>
        <Link
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Visit</div>
        </Link>
        <Git href={props.git}>
          <AiOutlineGithub
            size="30px"
            style={{
              position: 'relative',
              padding: '15px',
              cursor: 'pointer',
              color: 'white',
            }}
          />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
