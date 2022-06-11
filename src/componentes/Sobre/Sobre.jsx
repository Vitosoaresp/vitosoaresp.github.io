import React from 'react';
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
          <p>Me chamo Vitor tenho 18 anos e sou desenvolvedor Front-end, aprendi os fundamentos de programação na Trybe, e sempre busco acompanhar no youtube canais como a Rocketseat.</p>
          <div className='sobre-button-container' id='sobre'>
            <a
              href='https://github.com/Vitosoaresp'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button type='button' className='btn-github'>
                MEU GITHUB
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
