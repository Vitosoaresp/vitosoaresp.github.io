import React, { useState } from 'react';
import emBreve from '../../fotos/embreve.PNG';
import todolistImg from '../../fotos/todolist.jpg';
import './Projetos.css';
import { CgArrowDownO } from 'react-icons/cg';

function Projetos() {
  const [isCollapse, setCollapsed] = useState(['']);

  return (
    <div className='projetos-container' id='projetos'>
      <h3>Meus Projetos</h3>
      <hr />
      <div className='projetos-grid'>
        <div className='projeto-item'>
          <div className='projeto-item-img'>
            <img src={todolistImg} alt='todolist exemplo' />
            <button
              type='button'
              className='btn-arrow'
              onClick={() => setCollapsed(isCollapse)}
            >
              <CgArrowDownO />
            </button>
          </div>
          <div
            className='projeto-item-body'
            style={isCollapse ? { display: 'none' } : { display: 'block' }}
          >
              Uma simples aplicação de listar tarefas.
            <br />
              Tecnologias: HTML, CSS e JavaScript
            <hr />
            <div className='btn-project'>
              <a
                href='https://github.com/Vitosoaresp/todolist'
                target='_blank'
                rel='noreferrer'
              >
                <button className='btn-github'>Repositório</button>
              </a>
            </div>
          </div>
        </div>

        <div className='projeto-item'>
          <div className='projeto-item-img'>
            <img src={emBreve} alt='todolist exemplo' />
          </div>
          <div className='projeto-item-body'>
              Em Breve
            <hr />
            <div className='btn-project'>
              <a href=''>
                <button className='btn-github'>Repositório</button>
              </a>
            </div>
          </div>
        </div>

        <div className='projeto-item'>
          <div className='projeto-item-img'>
            <img src={emBreve} alt='todolist exemplo' />
          </div>
          <div className='projeto-item-body'>
              Em Breve
            <hr />
            <div className='btn-project'>
              <a href=''>
                <button className='btn-github'>Repositório</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Projetos;
