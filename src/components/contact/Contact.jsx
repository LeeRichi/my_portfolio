import "./contact.css";
import { FcCellPhone } from 'react-icons/fc';
import { SiMinutemailer } from 'react-icons/si'
import { FcHome } from 'react-icons/fc'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import Navbar from "../navbar/Navbar";

// import Phone from "../../img/phone.png";
// import Email from "../../img/email.png";
// import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hh37yvg",
        "template_11ut7sg",
        formRef.current,
        "user_KkzQmUfBwzHX54slkC4zh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar/>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Feel free to contact me</h1>
            <div className="c-info">
              <div className="c-info-item">           
                  <FcCellPhone size="30px"/>+358 9018 278
              </div>
              <div className="c-info-item">
                  <SiMinutemailer size="30px"/>lee.rich.chi@gmail.com
              </div>            
            </div>
            <a href="https://github.com/LeeRichi?tab=repositories">
              <AiOutlineGithub
              size="50px"
              cursor="pointer"
              style={{
                  position: 'relative',
                  padding: '15px',
                  cursor: 'pointer',
                  color: 'white'
              }} />
            </a>
            <a href="https://www.linkedin.com/in/leerichchi/">
              <AiFillLinkedin
                size="50px"
                cursor="pointer"
                style={{
                  position: 'relative',
                  padding: '15px',
                  color: 'white'
                }}
              />
            </a>
            <div className="c-hide">
              <div className="shape"></div>
              <form ref={formRef} onSubmit={handleSubmit}>
                <h3>Get in touch. Simply write your email and ask me anything.</h3>
                <input  type="text" placeholder="Name" name="user_name" />
                <input  type="text" placeholder="Subject" name="user_subject" />
                <input  type="text" placeholder="Email" name="user_email" />
                <textarea  rows="5" placeholder="Message" name="message" />
                <button>Submit</button>
                {done && "Succeed"}
              </form>
            </div>
          </div>
          <div className="c-right">
            <div className="shape"></div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <h3>Get in touch. Simply write your email and ask me anything.</h3>                      
              <input  type="text" placeholder="Name" name="user_name" />
              <input  type="text" placeholder="Subject" name="user_subject" />
              <input  type="text" placeholder="Email" name="user_email" />
              <textarea  rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Succeed"}
            </form>
          </div>
        </div>
      </div>
    </>
  );
      
};

export default Contact;