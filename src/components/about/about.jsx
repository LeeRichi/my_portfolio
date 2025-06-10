import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from '../../components/themes/Themes';
import ParticleComponent from '../../subComponents/ParticleComponent';
import Background_floating_obj from '../../subComponents/Background_floating_obj'
import astronaut from '../../image/Chi_Lee_without_background.png'
import Earth from '../../image/earth.png'
import ProfileCard from '../../blocks/Components/ProfileCard/ProfileCard'
import { scrollToSection } from '../../utils/scrollHelpers';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    min-height: 100vh;
    // height: 120vh;
  }
`
const ProfileCardWrapper = styled.div`
  position: absolute;
  top: 15rem;
  right: 10rem;
  z-index: 3;

  @media screen and (max-width: 1500px) {
    right: 6rem;
    top: 8rem;
  }

  @media screen and (max-width: 1200px) {
    right: rem;
    top: 8rem;
  }

  @media screen and (max-width: 1080px) {
    position: relative;
    top: 0;
    right: 0;
    margin: 0rem 0;
    transform: scale(0.8); /* Add this line */
  }

  @media screen and (max-width: 600px) {
    transform: scale(0.7); /* Even smaller for very small devices */
  }
`

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 75vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 5rem;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    width: 100vw;
    border: none;
    left: 0;
    top: 0;
    position: relative;
    padding: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 20px;
    min-height: 50vh;
    width: 80vw;
    position: relative;
    margin: 0 0 15rem 0;
    top: -2rem;
    left: 0;
  }
`

const AboutPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact')
  }

  return (
    <div id='about'>
      <ThemeProvider theme={DarkTheme}>
        <Box>
          <ParticleComponent theme='dark' />
          <ProfileCardWrapper>
            <ProfileCard
              name="Chi Lee"
              title="< Full-Stack Developer />"
              handle="chilee"
              status="Available"
              contactText="Let's Connect"
              avatarUrl={astronaut}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
              // className='ProfileCard'
            />
          </ProfileCardWrapper>

          <Main>
            <br />
            👋 Hi there,
            <br /><br />
            my name is Chi Lee, a Full-Stack Developer based in Helsinki, passionate about building real-world applications.
            Currently studying at Hive Helsinki.<br /><br />
            Recently, I won:<br />
            🏆 Junction 2024 — Europe's leading hackathon<br />
            🤖 Supercell × Junction AI Hackathon 2025<br />
            <br />
            Alongside school, I'm dedicating building my own side projects for fun.🌟
            <br /><br />
            If you're looking for someone with practical skills and hackathon-tested creativity — let's connect!
            <br /><br />
          </Main>

          <Background_floating_obj image={Earth} top="5%" left="72%" />
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default AboutPage
