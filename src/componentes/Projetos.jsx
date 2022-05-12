import React from 'react';
import { Accordion } from 'react-bootstrap';
// import emBreve from '../fotos/embreve.PNG';
import todolistImg from '../fotos/todolist.jpg';
import './Projetos.css';

class Projetos extends React.Component {
  render() {
    return (
      <div className="projetos-container" id="projetos">
        <h3>Meus Projetos</h3>
        <hr />
        <div className="projetos-grid">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><img src={ todolistImg } alt="todolist exemplo" /></Accordion.Header>
              <Accordion.Body>
                Uma simples aplicação de listar tarefas.<br />
                Tecnologias: HTML, CSS e JavaScript
                <hr />
                <div className="btn-project">
                  <a href="https://github.com/Vitosoaresp/todolist">Repositório</a>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  }
} 

export default Projetos;
