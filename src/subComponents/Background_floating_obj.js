import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const FloatingImage = styled.img`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 25vw;
  height: auto;
  opacity: 0.21;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  animation: ${rotate} 60s linear infinite;

  @media (max-width: 768px) {
    left: 10%;
  }

  @media (max-width: 480px) {
    left: 5%;
  }

`

const Background_floating_obj = ({ image, top, left, right }) => {
  return (
    <FloatingImage src={image} alt="background floating" top={top} left={left} right={right} />
  )
}

export default Background_floating_obj
