import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineCopyright,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-black-3 flex items-center flex-col justify-center h-32 pl-5">
      <div className="pt-4 w-full text-start">
        <p className="text-white text-xs">
          <AiOutlineCopyright className="text-white text-xs" />
          <span> </span>
            2022, Vitor Soares
        </p>
      </div>
      <div className="flex w-full justify-start">
        <a
          href="https://www.linkedin.com/in/vitorsoaresp/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-btn-gihub text-5xl hover:text-btn-git-hover"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/Vitosoaresp"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-btn-gihub text-5xl hover:text-btn-git-hover"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.instagram.com/vitosoaresp/"
          target="_blank"
          rel="noreferrer"
          className="no-underline text-btn-gihub text-5xl hover:text-btn-git-hover"
        >
          <AiFillInstagram />
        </a>
        <a
          href="mailto:pereiravitor1218@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="no-underline text-btn-gihub text-5xl hover:text-btn-git-hover"
        >
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
