import React from 'react';
import PropTypes from 'prop-types';
import './CardHabilidade.css';

export function CardHabilidade({ icon, nome, descricao }) {
  return (
    <div className="habilidadeCard">
      <div className="cardProfile">
        {icon}
        <p className="cardNome">{nome}</p>
      </div>

      <span className="cardDesc">
        {descricao}
      </span>
    </div>
  );
}

CardHabilidade.propTypes = {
  icon: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};