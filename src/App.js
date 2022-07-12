import React from 'react';
import Header from './components/Header/Header';
import Sobre from './components/Sobre/Sobre';
import Habilidades from './components/Habilidades/Habilidades';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
