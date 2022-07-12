import React from 'react';
import emBreve from '../../fotos/embreve.PNG';
import onlineStore from '../../fotos/online-store.png';
import './Projetos.css';
import { CardProjetos } from '../CardProjetos';

function Projetos() {
  return (
    <div className="flex items-center content-around bg-black-2 flex-wrap h-full p-10 justify-center w-full" id="projetos">
      <h3 className="text-white block w-full p-8 text-center">Meus Projetos</h3>
      <hr />
      <div className="flex flex-wrap justify-around h-full w-full gap-2">

        <CardProjetos
          imageProjeto={onlineStore}
          titulo="Online Store"
          descricao="é uma aplicação de compras online que foi desenvolvida
          em ReactJS, utilizando API do MercadoLivre."
          tecnologias="React (Hooks e ContextAPI), React-Router-Dom, React-icons."
          linkRepo="https://github.com/Vitosoaresp/online-store"
          linkAplicacao="https://vitosoaresp.github.io/online-store/"
        />

        <CardProjetos
          imageProjeto={emBreve}
          titulo="em breve"
          descricao="lorem ipsum dolor ipsum sit ipsum amet consectetur adipisicing elit."
          tecnologias="lorem ipsum dolor sit amet consectetur adipisicing elit."
          linkRepo="#"
          linkAplicacao="#"
        />

        <CardProjetos
          imageProjeto={emBreve}
          titulo="em breve"
          descricao="lorem ipsum dolor ipsum sit ipsum amet consectetur adipisicing elit."
          tecnologias="lorem ipsum dolor sit amet consectetur adipisicing elit."
          linkRepo="#"
          linkAplicacao="#"
        />

      </div>
    </div>
  );
}

export default Projetos;
