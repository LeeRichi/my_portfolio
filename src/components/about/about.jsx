import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from '../../components/themes/Themes';
import ParticleComponent from '../../subComponents/ParticleComponent';
import Background_floating_obj from '../../subComponents/Background_floating_obj'
import astronaut from '../../image/Chi_Lee_without_background.png'
import Earth from '../../image/earth.png'
import ProfileCard from '../../blocks/Components/ProfileCard/ProfileCard'

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

  @media screen and (max-width: 900px) {
    position: relative;
    top: 0;
    right: 0;
    margin: 2rem 0;
  }
`

const Main = styled.div`
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
  top: 5rem;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    width: 85vw;
    border: none;
    left: 0;
    top: 0;
    position: relative;
  }

  @media screen and (max-width: 900px) {
    font-size: 20px;
    height: auto;
    min-height: 50vh;
    width: 90vw;
    left: 0;
    position: relative;
    margin: 0 0 15rem 0;
  }

  @media screen and (max-width: 1450px) {
    height: 70vh;
    left: calc(2rem + 2vw);
  }
`

const AboutPage = () => {
  const handleContactClick = () => {
    // Add your contact logic here
    // For example: scroll to contact section, open modal, etc.
    console.log('Contact clicked');
    // You could also do something like:
    // document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
