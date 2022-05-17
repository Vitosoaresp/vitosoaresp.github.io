import React from 'react';
import { Button } from 'reactstrap';
import './Sobre.css';

class Sobre extends React.Component {
  render() {
    return (
      <div className='sobre-container' id='sobre'>
        <p>Bem Vindo ao meu Portfolio!</p>
        <p>
          <strong>VENHA ME CONHECER</strong>
        </p>
        <div className='sobre-button-container' id='sobre'>
          <a href='#habilidades'>
            <Button color='primary'>CONHECER</Button>
          </a>
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
    );
  }
}

export default Sobre;
