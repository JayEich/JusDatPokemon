import React from 'react';

interface NewPokemonButtonProps {
  isLoading: boolean;
  loadPokemon: () => void;
}

const NewPokemonButton: React.FC<NewPokemonButtonProps> = ({ isLoading, loadPokemon }) => {

  return (
    <button
        onClick={loadPokemon}
        disabled={isLoading}
       
className="px-6 py-2 bg-pkmn-accent-green text-pkmn-text-light rounded-none border-2 border-pkmn-text-light hover:bg-pkmn-border-dark hover:text-pkmn-text-light disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
    >
        {isLoading ? 'Cargando...' : 'Nuevo Pokémon'}
    </button>
  );
};

export default NewPokemonButton;