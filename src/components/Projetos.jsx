import React from 'react';
import onlineStore from '../fotos/online-store.png';
import rocketnfts from '../fotos/rocketnfts.jpeg';
import recipesapp from '../fotos/recipesapp.png';
import { CardProjetos } from './CardProjetos';

function Projetos() {
  return (
    <div className="flex items-center content-around bg-black-2 flex-wrap h-full p-10 justify-center w-full" id="projetos">
      <h3 className="text-white block w-full p-8 text-center">PROJETOS</h3>
      <hr />
      <div className="flex flex-wrap justify-around h-full w-full gap-2">

        <CardProjetos
          imageProjeto={rocketnfts}
          titulo="Rocket Nfts"
          descricao="foi um desafio da rocketseat de fazer uma landing page de NFTs"
          tecnologias="Typescript, React, Tailwind CSS e PhosphorIcons"
          linkRepo="https://github.com/Vitosoaresp/rocketnfts"
          linkAplicacao="https://vitosoaresp.github.io/rocketnfts/"
        />

        <CardProjetos
          imageProjeto={recipesapp}
          titulo="Recipes App"
          descricao="trata-se de um site mobile de receitas."
          tecnologias="React, React-Icons, React-Router-Dom"
          linkRepo="https://github.com/Vitosoaresp/recipes-app"
          linkAplicacao="https://recipes-app-five-rosy.vercel.app/"
        />

        <CardProjetos
          imageProjeto={onlineStore}
          titulo="Online Store"
          descricao="é um e-commerce, que foi desenvolvido
          utilizando API do MercadoLivre."
          tecnologias="React (Hooks e ContextAPI), React-Router-Dom, React-icons."
          linkRepo="https://github.com/Vitosoaresp/online-store"
          linkAplicacao="https://vitosoaresp.github.io/online-store/"
        />

      </div>
    </div>
  );
}

export default Projetos;
