import React from 'react';

interface AdivinaFormProps {
  userGuess: string;
  isGameOver: boolean;
  isLoading: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGuessSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AdivinaForm: React.FC<AdivinaFormProps> = ({
  userGuess,
  isGameOver,
  isLoading,
  handleInputChange,
  handleGuessSubmit
}) => {
  if (isGameOver) return null;

  return (
    <form onSubmit={handleGuessSubmit} className="flex flex-col items-center w-full">

      <input
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          placeholder="Escribe el nombre..."
          disabled={isLoading || isGameOver}
          className="w-full max-w-xs px-3 py-2 mb-3 border-2 border-pkmn-primary rounded-none bg-pkmn-background text-pkmn-primary placeholder-pkmn-accent focus:outline-none focus:ring-2 focus:ring-pkmn-accent"
          required
      />
      <button
          type="submit"
          disabled={isLoading || isGameOver || userGuess.trim() === ''}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400 transition duration-200"
      >
          ¡Adivinar!
      </button>
    </form>
  );
};

export default AdivinaForm;