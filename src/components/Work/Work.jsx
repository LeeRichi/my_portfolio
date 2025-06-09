import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../../components/themes/Themes'
import Card from '../../subComponents/Card'
import { products } from '../../data'
import { motion } from 'framer-motion'

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  position: absolute;
  top: 5rem; /* or any value you prefer for vertical position */
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  border-bottom: 2px solid white;
  padding-bottom: 15px;

  @media screen and (max-width: 900px) {
    top: 4rem;
  }

  @media screen and (max-width: 480px) {
    top: 3rem;
  }
`

const Box = styled(motion.div)`
  background-color: black;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  width: 100vw;
  overflow: hidden;
  z-index: 0;
`

const Main = styled(motion.ul)`
  position: relative;
  top: 0rem;
  left: 5vw;
  height: 40vh;
  display: flex;
  color: white;
  cursor: grab;
  z-index: 3;
  @media screen and (max-width: 480px) {
    margin-left: -6vw;
  }
`

const Work = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div id='work'>
      <ThemeProvider theme={DarkTheme}>
        <Box>
          <Title className={{}}>
            <i>My projects</i>
          </Title>
          <Main
            initial="hidden"
            animate="show"
            drag="x"
            dragConstraints={{ right: 0, left: width - 1800 }}
            dragMomentum={false}
          >
            {products.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                tags={item.tags}
                description={item.description}
                img={item.img}
                link={item.link}
                git={item.github}
                trophy={item.trophy}
                status={item.status}
              />
            ))}
          </Main>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default Work
