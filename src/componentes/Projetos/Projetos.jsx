import React from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { GoDeviceDesktop } from 'react-icons/go';
import emBreve from '../../fotos/embreve.PNG';
import onlineStore from '../../fotos/online-store.png';
import './Projetos.css';

function Projetos() {
  return (
    <div className="projetos-container" id="projetos">
      <h3>Meus Projetos</h3>
      <hr />
      <div className="projetos-grid">
        <div className="projeto-item">
          <div className="projeto-item-img">
            <img src={onlineStore} alt="Projeto de uma loja online" />
          </div>
          <div className="projeto-item-body">
            Online Store é uma aplicação de compras online que foi desenvolvida
            em ReactJS, utilizando API do MercadoLivre.
            <br />
            Tecnologias: ReactJS, React-Router-Dom, React-icons.
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
            <img src={emBreve} alt="" />
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
            <img src={emBreve} alt="" />
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
