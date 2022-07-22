import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineCopyright,
  AiFillGithub,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-black-3 flex items-center flex-col justify-center h-32 pl-5">
      <div className="pt-4 w-full text-start">
        <p className="text-white text-xs flex items-center gap-1">
          <AiOutlineCopyright className="text-white text-xs" />
          2022, Feito com React, Tailwind CSS e <span className="text-red-1">❤</span> por Vitor Soares
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
