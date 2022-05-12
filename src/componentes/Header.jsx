import React from 'react';
import logo from '../fotos/logoName.svg';
import './Header.css';
import { Nav,  Navbar } from 'react-bootstrap';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
    };
  }

  changeExpand = () => {
    const { expanded } = this.state;
    expanded ? this.setState({ expanded: false }) : this.setState({ expanded: 'expanded'});
  };

  render() {
    return (
      <header>
        <img src={ logo } alt="logo" />
        <nav>
          <div>
            <a href="#sobre">Sobre</a>
          </div>
          <div>
            <a href="#habilidades">Habilidades</a>
          </div>
          <div>
            <a href="#projetos">Projetos</a>
          </div>
          <div>
            <a href="#contato">Contato</a>
          </div>
         
        </nav>
        <div className="nav-smartphone">
          <Navbar collapseOnSelect expand="lg" bg="#26262C" variant="dark">
            <Navbar.Brand href="#" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#sobre">Sobre</Nav.Link>
                <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                <Nav.Link href="#projetos">Projetos</Nav.Link>
                <Nav.Link href="#contato">Contato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default Header;
