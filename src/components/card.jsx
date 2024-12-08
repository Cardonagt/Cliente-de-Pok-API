import React, { useState } from 'react';
import Modal from './modal';
import PokeballImage from '../assets/icons/pokeball.png';
import { searchIcon } from '../utils/icons';
import '../styles/card.css';

const Card = ({ pokemon }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
    document.body.classList.toggle('dark', !showModal);
  };

  return (
    <>
      <div
        className="card"
        onClick={handleModal}
        style={{
          backgroundColor: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`,
        }}
      >
        <div className="card__header">
          <img className="card__header-img" src={PokeballImage} alt="Pokeball" />
          <span className="card__header-text">#{pokemon.order}</span>
        </div>
        <div className="card__content">
          <h3 className="card__name">{pokemon.name}</h3>
          <img className="card__image" src={pokemon.sprites.front_default} alt={pokemon.name} loading="lazy" />
        </div>
        <div className="card__badge" style={{ backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})` }}>
          <img className="card__badge-icon" src={searchIcon(pokemon.types[0].type.name)} alt={pokemon.types[0].type.name} />
          <span className="card__badge-text">{pokemon.types[0].type.name}</span>
        </div>
      </div>
      {showModal && <Modal onHandleModal={handleModal} pokemon={pokemon} />}
    </>
  );
};

export default Card;
