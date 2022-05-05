import React from 'react';
import { Card, CardBody, CardGroup, CardImg, CardTitle } from 'reactstrap';
import emBreve from '../fotos/embreve.PNG';
import './Projetos.css';

class Projetos extends React.Component {
  render() {
    return (
      <div className="projetos-container" id="projetos">
        <h3>Meus Projetos</h3>
        <CardGroup>
          <Card>
            <CardImg src={ emBreve } alt="em breve"/>
            <CardBody>
              <CardTitle>EM BREVE</CardTitle>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg src={ emBreve } alt="em breve"/>
            <CardBody>
              <CardTitle>EM BREVE</CardTitle>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg src={ emBreve } alt="em breve"/>
            <CardBody>
              <CardTitle>EM BREVE</CardTitle>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg src={ emBreve } alt="em breve"/>
            <CardBody>
              <CardTitle>EM BREVE</CardTitle>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg src={ emBreve } alt="em breve"/>
            <CardBody>
              <CardTitle>EM BREVE</CardTitle>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg src={ emBreve } alt="em breve"/>
            <CardBody>
              <CardTitle>EM BREVE</CardTitle>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
} 

export default Projetos;
