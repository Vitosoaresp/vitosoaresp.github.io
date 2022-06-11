import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../fotos/logoName.svg';
import './Header.css';

function Header() {
  const [menuVisivel, setMenuVisivel] = useState(false);
  return (
    <>
      <header>
        <img src={ logo } alt="logo" />
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <button type="button" className="btn-menu" onClick={ () => setMenuVisivel(!menuVisivel)}>
          <AiOutlineMenu />
        </button>
      </header>
      <div className="menu-smartphone" style={ {height: menuVisivel ? '120px' : '0'} }>
        <button type="button" className="btn-link" onClick={() => setMenuVisivel(false)}>
          <a href='#sobre'>Sobre</a>
        </button>
        <button type="button" className="btn-link" onClick={() => setMenuVisivel(false)}>
          <a href='#habilidades'>Habilidades</a>
        </button>
        <button type="button" className="btn-link" onClick={() => setMenuVisivel(false)}>
          <a href='#projetos'>Projetos</a>
        </button>
        <button type="button" className="btn-link" onClick={() => setMenuVisivel(false)}>
          <a href='#contato'>Contato</a>
        </button>
      </div>
    </>
  );
}

export default Header;
