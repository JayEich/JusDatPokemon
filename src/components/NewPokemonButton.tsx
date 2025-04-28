// src/components/NewPokemonButton.tsx
import React from 'react';

interface NewPokemonButtonProps {
  isLoading: boolean;
  loadPokemon: () => void; // La función para cargar un nuevo pokémon
}

const NewPokemonButton: React.FC<NewPokemonButtonProps> = ({ isLoading, loadPokemon }) => {
  // No mostrar el botón si está cargando inicialmente (opcional, App ya lo maneja)
  // if (isLoading) return null;

  return (
    <button
        onClick={loadPokemon}
        disabled={isLoading}
        // Clases actualizadas para look retro
        /* Clases para botones (Opción B - Borde Claro) */
className="px-6 py-2 bg-pkmn-accent-green text-pkmn-text-light rounded-none border-2 border-pkmn-text-light hover:bg-pkmn-border-dark hover:text-pkmn-text-light disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
    >
        {isLoading ? 'Cargando...' : 'Nuevo Pokémon'}
    </button>
  );
};

// --- ASEGÚRATE DE QUE ESTA LÍNEA ESTÉ PRESENTE Y CORRECTA ---
export default NewPokemonButton;