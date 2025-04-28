import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-900 text-white p-4 mt-auto">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} JusDatPokemon By JayEich (y el profe sebas). Todos los derechos reservados.</p>
        <p>Datos de Pokémon cortesía de <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">PokéAPI</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;