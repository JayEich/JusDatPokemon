import React from 'react';
import { Pokemon } from '../interfaces/Pokemon';

interface PokemonImageProps {
  pokemon: Pokemon | null;
  isRevealed: boolean;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ pokemon, isRevealed }) => {
  if (!pokemon) return null; 

  const imageUrl = pokemon.sprites.other?.['official-artwork']?.front_default ?? pokemon.sprites.front_default ?? '';

  return (
    <div className="relative mb-4 w-48 h-48">
      <img
        draggable="false"
        src={imageUrl}
        alt="Pokémon Oculto"
        className={`
          w-full h-full object-contain transition-filter duration-500 ease-in-out
          ${isRevealed ? 'filter-none' : 'brightness-0'}
        `}
        style={{ filter: isRevealed ? 'none' : 'brightness(0)' }}
      />
    </div>
  );
};

export default PokemonImage;