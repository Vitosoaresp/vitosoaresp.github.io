import React from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { GoDeviceDesktop } from 'react-icons/go';
import emBreve from '../../fotos/embreve.PNG';
import onlineStore from '../../fotos/online-store.png';
import './Projetos.css';

function Projetos() {
  return (
    <div className="flex items-center content-around bg-black-2 flex-wrap h-full p-10 justify-center w-full" id="projetos">
      <h3 className="text-white block w-full p-8 text-center">Meus Projetos</h3>
      <hr />
      <div className="flex flex-wrap justify-around h-full w-full">
    
        <div className="flex items-center bg-black-4 rounded flex-col justify-start md:w-[30%] w-4/5 min-w-[280px] md:mb-5 p-2 md:p-5 mb-0">
          <div className="self-center min-w-[250px]">
            <img src={onlineStore} alt="Projeto de uma loja online" className="rounded max-w-full max-h-[150px] object-contain" />
          </div>
          <div className="flex flex-col bg-black-4 rounded text-gray-400 items-center p-1 w-full text-center">
            Online Store é uma aplicação de compras online que foi desenvolvida
            em ReactJS, utilizando API do MercadoLivre.
            <br />
            Tecnologias: React (Hooks e ContextAPI), React-Router-Dom, React-icons.
            <hr />
            <div className="btn-project">
              <a
                href="https://github.com/Vitosoaresp/online-store"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-repo">
                  <VscGithubInverted />
                  Repositório
                </button>
              </a>
              <a
                href="https://vitosoaresp.github.io/online-store/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-ghpages">
                  <GoDeviceDesktop />
                  Aplicação
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="projeto-item">
          <div className="projeto-item-img">
            <img src={emBreve} alt="" width="100%" />
          </div>
          <div className="projeto-item-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <hr />
            <div className="btn-project">
              <a href="#" target="_blank" rel="noreferrer">
                <button className="btn-repo">
                  <VscGithubInverted />
                  Repositório
                </button>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <button className="btn-ghpages">
                  <GoDeviceDesktop />
                  Aplicação
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="projeto-item">
          <div className="projeto-item-img">
            <img src={emBreve} alt="" width="100%" />
          </div>
          <div className="projeto-item-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Modi omnis excepturi repellat nihil aut velit, maiores neque placeat
            soluta.
            <hr />
            <div className="btn-project">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-repo">
                  <VscGithubInverted />
                  Repositório
                </button>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <button className="btn-ghpages">
                  <GoDeviceDesktop />
                  Aplicação
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
