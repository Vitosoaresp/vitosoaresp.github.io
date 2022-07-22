import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import minhaFoto from '../fotos/vitor.png';

function Sobre() {
  return (
    <div className="bg-black-2 flex flex-col items-center py-[150px] px-6 w-full" id="sobre">
      <p className="text-white text-center text-4xl font-semibold">Olá, Bem Vindo ao meu Portfolio!</p>
      <div className="flex items-center flex-col justify-center w-full md:flex-row md:mt-8" >
        <div className="md:self-start">
          <img src={ minhaFoto } alt="self de Vitor Soares" className="w-32 mb-8 rounded-[7rem] md:w-[200px] md:h-[200px]" />
        </div>
        <div className="flex items-center flex-col w-full md:ml-20 md:w-1/2">
          <p className="text-center text-base mb-8 text-white">Me chamo Vitor tenho 18 anos e sou desenvolvedor Front-end
            <br />
          atualmente estou cursando Desenvolvimento Web Full Stack na Trybe.
            <br />
          Para saber mais sobre mim me encontre no linkedin abaixo.</p>
          <div className="flex items-center gap-4">
            <a
              href='https://github.com/Vitosoaresp'
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center bg-purple-600 rounded border border-btn-gihub text-white px-10 py-3 gap-2 no-underline font-semibold text-base transition-colors align-middle hover:bg-purple-700 hover:text-black md:ml-[-15px]"
            >
              <FiGithub />
              MEU GITHUB
            </a>
            <a href="https://www.linkedin.com/in/vitorsoaresp/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-6xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
