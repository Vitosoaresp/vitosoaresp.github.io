import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../fotos/logoName.svg';

function Header() {
  const [menuVisivel, setMenuVisivel] = useState(false);
  return (
    <>
      <header className="flex bg-black-3 h-[100px] fixed top-0 left-0 justify-between w-full z-[1] items-center">
        <img
          src={logo}
          alt="logo"
          className="h-[150px] w-[150px] rounded-[100px]"
        />
        <nav className="relative hidden h-0 md:flex items-center justify-around w-3/4">
          <a href="#sobre" className="text-lg font-bold md:text-slate-100 md:no-underline hover:text-purple-500">
            Sobre
          </a>
          <a href="#habilidades" className="text-lg font-bold md:text-slate-100 md:no-underline hover:text-purple-500">
            Habilidades
          </a>
          <a href="#projetos" className="text-lg font-bold md:text-slate-100 md:no-underline hover:text-purple-500">
            Projetos
          </a>
          <a href="#contato" className="text-lg font-bold md:text-slate-100 md:no-underline hover:text-purple-500">
            Contato
          </a>
        </nav>
        <button
          type="button"
          className="bg-transparent absolute right-10 top-12 md:hidden"
          onClick={() => setMenuVisivel(!menuVisivel)}
        >
          <AiOutlineMenu className="text-white text-4xl hover:text-5xl" />
        </button>
      </header>
      <div
        className="flex items-center bg-black-1 flex-col justify-around fixed top-0 right-0 pb-10 h-full transition-all duration-500 overflow-hidden z-10"
        style={{ width: menuVisivel ? '80vw' : '0' }}
      >
        <button
          type="button"
          onClick={() => setMenuVisivel(false)}
          className="bg-transparent absolute text-white text-3xl right-10 top-5"
        >
          <AiOutlineClose />
        </button>
        <a
          href="#sobre"
          onClick={() => setMenuVisivel(false)}
          className="text-slate-100 hover:text-purple-500 uppercase no-underline"
        >
          Sobre
        </a>
        <a
          href="#habilidades"
          onClick={() => setMenuVisivel(false)}
          className="text-slate-100 hover:text-purple-500 uppercase no-underline"
        >
          Habilidades
        </a>
        <a
          href="#projetos"
          onClick={() => setMenuVisivel(false)}
          className="text-slate-100 hover:text-purple-500 uppercase no-underline"
        >
          Projetos
        </a>
        <a
          href="#contato"
          onClick={() => setMenuVisivel(false)}
          className="text-slate-100 hover:text-purple-500 uppercase no-underline"
        >
          Contato
        </a>
      </div>
    </>
  );
}

export default Header;
