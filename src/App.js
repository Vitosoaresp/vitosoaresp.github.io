import React, { Component } from 'react';
import './App.css';
import Header from './componentes/Header';
import Sobre from './componentes/Sobre';
import Habilidades from './componentes/Habilidades';
import Projetos from './componentes/Projetos';
import Contato from './componentes/Contato';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componentes/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
        <Footer />
      </div>
    );
  }
}

export default App;
