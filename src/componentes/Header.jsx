import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../fotos/logoName.svg';
import './Header.css';

function Header() {
  const [menuVisivel, setMenuVisivel] = useState(false);
  return (
    <>
      <header>
        <img src={ logo } alt="logo" />
        <nav>
          <button type="button" className="btn-menu" onClick={ () => setMenuVisivel(!menuVisivel)}>
            <AiOutlineMenu />
          </button>
        </nav>
      </header>
      <div className="menu-smartphone" style={ {height: menuVisivel ? '120px' : '0', opacity: menuVisivel ? '1' : '0'} }>
        <a href='#sobre'>Sobre</a>
        <a href='#habilidades'>Habilidades</a>
        <a href='#projetos'>Projetos</a>
        <a href='#contato'>Contato</a>
      </div>
    </>
  );
}

export default Header;
