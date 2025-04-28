import React from 'react';

interface RespuestaMessageProps {
  message: string;
  isRevealed: boolean;
  pokemonName?: string; 
}

const RespuestaMessage: React.FC<RespuestaMessageProps> = ({ message, isRevealed, pokemonName }) => {
  if (!message) return null; 

  const isSuccessMessage = message.includes('¡Correcto!') || message.includes('¡Era') || message.includes('sin intentos');
  const textColor = isSuccessMessage ? 'text-green-600' : 'text-red-600';
  const revealedMessage = message.includes('¡Era') ? `¡Era ${pokemonName}!` : message;


  return (
    <p className={`mt-4 text-xl ${ isRevealed ? (isSuccessMessage ? 'text-green-600' : 'text-gray-700') : textColor } text-center`}>

      {isRevealed ? revealedMessage : message}
    </p>
  );
};

export default RespuestaMessage;