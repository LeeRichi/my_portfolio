import Intro from '../src/components/intro/intro'
import About from '../src/components/about/about'
import Work from '../src/components/Work/Work'
import Navbar from '../src/components/navbar/Navbar'
import Contact from '../src/components/contact/Contact'

// import styled, { keyframes, ThemeProvider } from 'styled-components'

// import {DarkTheme} from '../src/components/themes/Themes';

// import ParticleComponent from '../src/subComponents/ParticleComponent'


import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
