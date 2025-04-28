import React, { useState } from 'react';

interface GuelcomeProps {
  onNameSubmitted: (name: string) => void;
}

const Guelcome: React.FC<GuelcomeProps> = ({ onNameSubmitted }) => {
  const [inputName, setInputName] = useState<string>('');

  const handleNameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = inputName.trim();
    if (name) {
      onNameSubmitted(name);
    }
  };

  const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  return (
    <div className="w-full max-w-sm text-center">
  
        <img src="/assets/pokemon.png" alt="Bienvenida" className="mx-auto mb-4 w-80 h-auto" />
        <form onSubmit={handleNameSubmit} className="flex flex-col items-center bg-pkmn-secondary border-2 border-pkmn-primary p-6 shadow-md rounded">
            <label htmlFor="userNameInput" className="mb-2 text-lg font-medium text-pkmn-primary">Ingresa tu nombre:</label>
            <input
               id="userNameInput"
               type="text"
               value={inputName}
               onChange={handleNameInputChange}
               placeholder="Entrenador Pokémon"
               className="w-full px-3 py-2 mb-4 border-2 border-pkmn-primary rounded-none bg-pkmn-background text-pkmn-primary placeholder-pkmn-accent focus:outline-none focus:ring-1 focus:ring-pkmn-accent"
               required
            />
            <button
               type="submit"
               disabled={inputName.trim() === ''}
               className="px-6 py-2 bg-pkmn-accent text-pkmn-background rounded-none border-2 border-pkmn-primary hover:bg-pkmn-primary hover:text-pkmn-background disabled:bg-gray-400 disabled:border-gray-500 transition duration-100"
           >
               ¡Empezar a Jugar!
           </button>
        </form>
   </div>
  );
};

export default Guelcome;