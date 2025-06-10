import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Lanyard from '../../blocks/Components/Lanyard/Lanyard_old.jsx'

import Dock from '../../blocks/Components/Dock/Dock.jsx'

  const items = [
    { icon: <FaGithub size={18} />, label: 'Home', onClick: () => window.open('https://github.com/LeeRichi', '_blank') },
    { icon: <FaYoutube size={18} />, label: 'Archive', onClick: () => window.open('https://www.youtube.com/@richibanOMG', '_blank') },
    { icon: <FaLinkedin size={18} />, label: 'Profile', onClick: () => window.open('https://www.linkedin.com/in/leerichchi', '_blank') },
  ];

const Contact = () => {
  return (
    <div style={containerStyle} id='contact'>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      <footer style={footerStyle}>
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </footer>
    </div>
  );
};

const footerStyle = {
	position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  gap: '3rem',
  // padding: '1rem 0',
  backgroundColor: 'black',
  color: 'white',
  height: 50,
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  background: 'black',
  width: '100vw',
  height: '100vh',
}

export default Contact;
