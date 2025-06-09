import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Lanyard from '/Users/ichr/Desktop/personal_web/src/blocks/Components/Lanyard/Lanyard.jsx'


const Contact = () => {
  return (
    <div style={containerStyle}>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      <footer style={footerStyle}>
        <a
          href="https://github.com/LeeRichi"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
          aria-label="GitHub"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.youtube.com/@richibanOMG"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
          aria-label="YouTube"
        >
          <FaYoutube size={32} color="#FF0000" />
        </a>

        <a
          href="https://linkedin.com/in/leerichchi"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={32} color="#0A66C2" />
        </a>
      </footer>
    </div>
  );
};

const footerStyle = {
	position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  gap: '3rem',
  padding: '1rem 0',
  backgroundColor: 'black',
  color: 'white',
  height: 50,
};

const iconLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  background: 'black'
}

export default Contact;
