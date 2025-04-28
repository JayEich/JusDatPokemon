import React from 'react';
import { Pokemon } from '../interfaces/Pokemon';
import Scoreboard from './Scoreboard';
import PokemonImage from './PokemonImage';
import AdivinaForm from './AdivinaForm'; // Asegúrate que este nombre es correcto
import RespuestaMessage from './RespuestaMessage'; // Asegúrate que este nombre es correcto
import NewPokemonButton from './NewPokemonButton';

interface JuegoScreenProps {
  userName: string;
  score: number;
  attempts: number;
  maxAttempts: number;
  currentPokemon: Pokemon | null;
  isLoading: boolean;
  error: string | null;
  isRevealed: boolean;
  userGuess: string;
  feedbackMessage: string;
  showWinImage: boolean;
  showLossImage: boolean;
  isGameOverForCurrentPokemon: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGuessSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loadPokemon: () => void;
}

const JuegoScreen: React.FC<JuegoScreenProps> = ({
  userName, 
  score,
  attempts,
  maxAttempts,
  currentPokemon,
  isLoading,
  error,
  isRevealed,
  userGuess,
  feedbackMessage,
  showWinImage,
  showLossImage,
  isGameOverForCurrentPokemon,
  handleInputChange,
  handleGuessSubmit,
  loadPokemon,
}) => {
  return (
     <div className="w-full max-w-md mt-8 flex flex-col items-center">

        <div className="mb-4">
             <p className="text-lg">Jugador: <span className="text-3xl font-bold mb-6 text-pkmn-primary">{userName}</span></p>
        </div>


        {isLoading && !currentPokemon && <p className="text-xl text-pkmn-accent-green text-center">Cargando Pokémon...</p>}
        {error && <p className="text-xl text-red-600 text-center">{error}</p>}

        {!error && currentPokemon && (
            <div className="flex flex-col items-center bg-pkmn-secondary border-4 border-pkmn-border-dark p-6 shadow-lg w-full mt-4 rounded-none">
                <div className="mb-4 w-full">
                   <Scoreboard score={score} attempts={attempts} maxAttempts={maxAttempts} />
                </div>

                <PokemonImage pokemon={currentPokemon} isRevealed={isRevealed} />

                
                {showWinImage && <img src="/assets/winner.jpg" alt="¡Ganaste!" className="mx-auto mt-4 w-30 h-auto" />}
                {showLossImage && <img src="/assets/loser.jpg" alt="Perdiste" className="mx-auto mt-4 w-40 h-auto" />}

                <RespuestaMessage
                    message={feedbackMessage}
                    isRevealed={isRevealed}
                    pokemonName={currentPokemon.name} 
                />
                

                <AdivinaForm
                    userGuess={userGuess}
                    isGameOver={isGameOverForCurrentPokemon}
                    isLoading={isLoading}
                    handleInputChange={handleInputChange}
                    handleGuessSubmit={handleGuessSubmit}
                />
            </div>
        )}

        {!error && (
            <div className="text-center mt-6">
              <NewPokemonButton isLoading={isLoading} loadPokemon={loadPokemon} />
            </div>
        )}
    </div>
  );
};

export default JuegoScreen;