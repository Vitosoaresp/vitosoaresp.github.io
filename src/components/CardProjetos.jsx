import React from 'react';
import { GoDeviceDesktop } from 'react-icons/go';
import { VscGithubInverted } from 'react-icons/vsc';
import PropTypes from 'prop-types';

export function CardProjetos({
  imageProjeto,
  titulo,
  descricao,
  tecnologias,
  linkRepo,
  linkAplicacao,
}) {
  return (
    <>
      <div className="flex items-center bg-black-4 rounded-md shadow-sm flex-col justify-start md:w-[30%] w-4/5 min-w-[280px] md:mb-5 p-2 md:p-5 mb-0">
        <div className="self-center min-w-[250px]">
          <img
            src={imageProjeto}
            alt={`Projeto de ${titulo}`}
            className="rounded max-w-full max-h-[150px] m-auto object-contain"
          />
        </div>
        <div className="flex flex-col bg-black-4 rounded text-gray-400 items-center p-1 w-full text-center">
          {`${titulo} ${descricao}`}
          <br />
          Tecnologias: {tecnologias}
          <hr />
          <div className="flex items-center md:p-2 p-1 justify-center">
            <a
              href={linkRepo}
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <button className="flex items-center flex-col bg-btn-gihub rounded text-white py-2 md:px-8 px-6 font-semibold text-sm mr-2 transition-colors align-middle hover:bg-btn-git-hover">
                <VscGithubInverted />
                Repositório
              </button>
            </a>
            <a
              className="no-underline"
              href={linkAplicacao}
              target="_blank"
              rel="noreferrer"
            >
              <button className="items-center flex flex-col bg-black-2 border border-black hover:bg-black rounded text-white py-2 md:px-8 px-6 font-semibold text-sm transition-colors align-middle">
                <GoDeviceDesktop />
                Aplicação
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

CardProjetos.propTypes = {
  imageProjeto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  tecnologias: PropTypes.string.isRequired,
  linkRepo: PropTypes.string.isRequired,
  linkAplicacao: PropTypes.string.isRequired,
};
