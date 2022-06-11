import React from 'react';
import Header from './componentes/Header/Header';
import Sobre from './componentes/Sobre/Sobre';
// import Habilidades from './componentes/Habilidades';
import Projetos from './componentes/Projetos/Projetos';
import Contato from './componentes/Contato';
import Footer from './componentes/Footer';

function App() {
  return (
    <div>
      <Header />
      <Sobre />
      {/* <Habilidades /> */}
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}


export default App;
