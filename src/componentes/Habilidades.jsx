import React from 'react';
import { Button, Card, CardBody, CardGroup, CardImg, CardText, CardTitle } from 'reactstrap';
import htmlImg from '../fotos/html.png';
import css from '../fotos/css.png';
import js from '../fotos/javascript.png';
import reactImg from '../fotos/react.png';
import './Habilidades.css';

class Habilidades extends React.Component {
  render() {
    return (
      <div className="habilidades-container" id="habilidades">
        <h2>Minhas Habilidades</h2>
        <CardGroup>
          <Card>
            <CardImg src={ htmlImg } alt="icon-htm" className="icon-image"/>
            <CardBody>
              <CardTitle tag="h5">HTML 5</CardTitle>
              <CardText>
                HTML é uma linguagem de marcação utilizada na construção de páginas na Web. 
              </CardText>
              <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer">
                <Button>Saber mais</Button>
              </a>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg src={ css } alt="icon-css" className="icon-image"/>
            <CardBody>
              <CardTitle tag="h5">CSS 3</CardTitle>
              <CardText>
                CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web.
              </CardText>
              <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer">
                <Button>Saber mais</Button>
              </a>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg src={ js } alt="icon-js" className="icon-image"/>
            <CardBody>
              <CardTitle tag="h5">Java Script</CardTitle>
              <CardText>
                JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.
              </CardText>
              <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer">
                <Button>Saber mais</Button>
              </a>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg src={ reactImg } alt="icon-css" className="icon-image"/>
            <CardBody>
              <CardTitle tag="h5">React</CardTitle>
              <CardText>
                O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
              </CardText>
              <a href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer">
                <Button>Saber mais</Button>
              </a>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
} 

export default Habilidades;
