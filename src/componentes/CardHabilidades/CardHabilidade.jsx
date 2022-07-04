import React from 'react';
import PropTypes from 'prop-types';
import './CardHabilidade.css';

export function CardHabilidade({ icon, nome, descricao, isAncora, href }) {
  return (
    <div className="habilidadeCard">
      <div className="cardProfile">
        {isAncora ? (
          <a href={href} target="_blank" rel="noreferrer">
            {icon}
          </a>
        ) : (
          icon
        )}
        <p className="cardNome">{nome}</p>
      </div>

      <span className="cardDesc">{descricao}</span>
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
