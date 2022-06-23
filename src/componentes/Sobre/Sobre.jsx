import React from 'react';
import { FiGithub } from 'react-icons/fi';
import minhaFoto from '../../fotos/vitor.png';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-container">
      <p>Olá, Bem Vindo ao meu Portfolio!</p>
      <div className="sobre-mim-container" id="sobre">
        <div className="foto-container">
          <img src={ minhaFoto } alt="self de Vitor Soares" width="120px" />
        </div>
        <div className="sobre-mim">
          <p>Me chamo Vitor tenho 18 anos e sou desenvolvedor Front-end, aprendi os fundamentos de programação na Trybe, e sempre busco acompanhar no youtube canais como do Filipe Deschamps, Rocketseat, Rafaella Ballerini.</p>
          <div className='sobre-button-container' id='sobre'>
            <a
              href='https://github.com/Vitosoaresp'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-github'
            >
              <FiGithub />
              MEU GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
