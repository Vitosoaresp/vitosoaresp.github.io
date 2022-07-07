import React from 'react';
import PropTypes from 'prop-types';

export function CardHabilidade({ icon, nome, descricao, isAncora, href }) {
  return (
    <div className="flex items-start bg-black-2 shadow-lg rounded-2xl text-white flex-col justify-center md:h-[277px] m-4 min-w-[222px] transition-colors p-3 w-1/4 hover:border hover:border-purple-600 h-auto">
      <div className="flex items-center flex-col justify-items-center mx-auto">
        {isAncora ? (
          <a href={href} target="_blank" rel="noreferrer" className="text-white cursor-pointer no-underline">
            <span className="hover:text-purple-600 text-7xl transition-colors">{icon}</span>
          </a>
        ) : (
          <span className="hover:text-purple-600 text-7xl transition-all">{icon}</span>
        )}
        <p className="mt-2 font-medium">{nome}</p>
      </div>

      <span className="ml-[4px] text-lg md:text-sm">{descricao}</span>
    </div>
  );
}

CardHabilidade.propTypes = {
  icon: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  isAncora: PropTypes.bool.isRequired,
  href: PropTypes.string,
};
