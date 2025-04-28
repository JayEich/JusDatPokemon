import { useState, useEffect } from 'react';
import { Pokemon } from './interfaces/Pokemon';
import { getRandomPokemon } from './services/pokemonService';
import Header from './components/Header';
import Footer from './components/Footer';
import Guelcome from './components/Guelcome'; 
import JuegoScreen from './components/JuegoScreen';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [userGuess, setUserGuess] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showWinImage, setShowWinImage] = useState<boolean>(false);
  const [showLossImage, setShowLossImage] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [isNameSet, setIsNameSet] = useState<boolean>(false);

  const MAX_ATTEMPTS = 3;

  const loadPokemon = async () => {
    setIsLoading(true);
    setError(null);
    setCurrentPokemon(null);
    setIsRevealed(false);
    setUserGuess('');
    setFeedbackMessage('');
    setAttempts(0);
    setShowWinImage(false);
    setShowLossImage(false);
    try {
      const pokemonData = await getRandomPokemon();
      setCurrentPokemon(pokemonData);
    } catch (err) {
      setError('No se pudo cargar el Pokémon. Intenta de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isNameSet) {
      loadPokemon();
    }
  }, [isNameSet]);

  const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentPokemon || isLoading || isRevealed || (MAX_ATTEMPTS > 0 && attempts >= MAX_ATTEMPTS)) return;

    const guess = userGuess.trim().toLowerCase();
    const correctName = currentPokemon.name.toLowerCase();
    let currentAttempts = attempts + 1;

    if (guess === correctName) {
      setIsRevealed(true);
      setFeedbackMessage(`¡Correcto, ${userName}! Es ${currentPokemon.name}. Te tomó ${currentAttempts} intento(s).`);
      setScore(prevScore => prevScore + 1);
      setAttempts(currentAttempts);
      setShowWinImage(true);
    } else {
      setAttempts(currentAttempts);
      setUserGuess('');
      if (MAX_ATTEMPTS > 0 && currentAttempts >= MAX_ATTEMPTS) {
         setFeedbackMessage(`¡Oh no, ${userName}! Te quedaste sin intentos. El Pokémon era ${currentPokemon.name}.`);
         setIsRevealed(true);
         setShowLossImage(true);
      } else {
         const remainingAttempts = MAX_ATTEMPTS > 0 ? MAX_ATTEMPTS - currentAttempts : 'infinitos';
         setFeedbackMessage(`Incorrecto. Intenta de nuevo. (Intentos restantes: ${remainingAttempts})`);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(event.target.value);
  };

  const handleNameSubmitted = (name: string) => {
     setUserName(name);
     setIsNameSet(true);
     setIsLoading(true);
  };

  const isGameOverForCurrentPokemon = isRevealed || (MAX_ATTEMPTS > 0 && attempts >= MAX_ATTEMPTS);

  return (
    <div
      className="flex flex-col min-h-screen text-pkmn-text-main bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('./assets/pokeback.jpg')" }}
    >
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-4 pt-4 pb-10">
          {!isNameSet ? (
            <Guelcome onNameSubmitted={handleNameSubmitted} />
          ) : (
            <JuegoScreen
              userName={userName}
              score={score}
              attempts={attempts}
              maxAttempts={MAX_ATTEMPTS}
              currentPokemon={currentPokemon}
              isLoading={isLoading}
              error={error}
              isRevealed={isRevealed}
              userGuess={userGuess}
              feedbackMessage={feedbackMessage}
              showWinImage={showWinImage}
              showLossImage={showLossImage}
              isGameOverForCurrentPokemon={isGameOverForCurrentPokemon}
              handleInputChange={handleInputChange}
              handleGuessSubmit={handleGuess}
              loadPokemon={loadPokemon}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;