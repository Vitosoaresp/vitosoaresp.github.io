import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiCss3, SiRedux } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { CardHabilidade } from '../CardHabilidades/CardHabilidade';
import { DiJavascript, DiGit } from 'react-icons/di';
import './Habilidades.css';

class Habilidades extends React.Component {
  render() {
    return (
      <section className="habilidades-container">
        <h2>TECNOLOGIAS</h2>
        <div className="cards" id="habilidades">
          <CardHabilidade
            icon={<AiOutlineHtml5 />}
            nome="HTML5"
            descricao="É uma linguagem de marcação utilizada na construção de páginas na Web."
          />
          <CardHabilidade
            icon={<SiCss3 />}
            nome="CSS3"
            descricao="É a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web."
          />
          <CardHabilidade
            icon={<DiJavascript />}
            nome="JavaScript"
            descricao="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
          />
          <a href="https://pt-br.reactjs.org/" className="ancora">
            <CardHabilidade
              icon={<FaReact />}
              nome="React"
              descricao="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
            />
          </a>
          <a href="https://redux.js.org/" className="ancora">
            <CardHabilidade
              icon={<SiRedux />}
              nome="Redux"
              descricao="Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo."
            />
          </a>
          <a href="https://git-scm.com/" className="ancora">
            <CardHabilidade
              icon={<DiGit />}
              nome="Git"
              descricao="É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo."
            />
          </a>
        </div>
      </section>
    );
  }
} 

export default Habilidades;
