import React from 'react';
import './PokemonCard.css'

interface PokemonCardProps {
  name: string;
  order: number;
  types: string[];
  moves: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, order, types, moves }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Pokédex number: {order}</p>
        <p className="card-text">Types: {types.join(', ')}</p>
        <p className="card-text">Moves: {moves.join(', ')}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
