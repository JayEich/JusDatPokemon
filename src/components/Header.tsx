import React from 'react';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-pkmn-accent-green text-pkmn-text-light p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">¿Jus Dat Poquemon?</h1>
        <img src="/assets/pokemon.png" alt="Logo" className="h-12 w-auto" />
      </div>
    </header>
  );
};

export default Header;