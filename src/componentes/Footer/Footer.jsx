import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineCopyright,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div>
          <p>
            <AiOutlineCopyright />
            <span> </span>
            2022, Vitor Soares
          </p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/vitorsoaresp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/Vitosoaresp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com/vitosoaresp/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="mailto:pereiravitor1218@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
