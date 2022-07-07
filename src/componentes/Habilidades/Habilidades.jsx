import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { CardHabilidade } from '../CardHabilidades/CardHabilidade';
import { DiJavascript, DiGit } from 'react-icons/di';

class Habilidades extends React.Component {
  render() {
    return (
      <section className="bg-black-1 flex w-full justify-around flex-wrap p-10 flex-shrink-0" id="habilidades">
        <h2 className="block text-white p-12 font-bold text-center w-full">MINHAS SKILLS</h2>
        <div className="flex flex-wrap justify-center h-full">
          <CardHabilidade
            icon={<AiOutlineHtml5 />}
            nome="HTML5"
            descricao="É uma linguagem de marcação utilizada na construção de páginas na Web."
            isAncora={false}
          />
          <CardHabilidade
            icon={<SiTailwindcss />}
            nome="Tailwind CSS"
            descricao="Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta. Isso permite que você otimize o tempo de criação de uma UI sem precisar fazer tudo manualmente."
            isAncora={true}
            href="https://tailwindcss.com/"
          />
          <CardHabilidade
            icon={<DiJavascript />}
            nome="JavaScript"
            descricao="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
            isAncora={false}
          />
          <CardHabilidade
            icon={<FaReact />}
            nome="React"
            descricao="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
            isAncora={true}
            href="https://pt-br.reactjs.org/"
          />
          <CardHabilidade
            icon={<SiRedux />}
            nome="Redux"
            descricao="Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo."
            isAncora={true}
            href="https://redux.js.org/"
          />
          <CardHabilidade
            icon={<DiGit />}
            nome="Git"
            descricao="É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software."
            isAncora={true}
            hfer="https://git-scm.com/"
          />
        </div>
      </section>
    );
  }
} 

export default Habilidades;
