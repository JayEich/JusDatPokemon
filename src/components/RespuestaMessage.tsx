import React from 'react';

interface RespuestaMessageProps {
  message: string;
  isRevealed: boolean; // Para saber si el mensaje es de éxito o error post-revelación
  pokemonName?: string; // Nombre real para mostrar si se agotan intentos
}

const RespuestaMessage: React.FC<RespuestaMessageProps> = ({ message, isRevealed, pokemonName }) => {
  if (!message) return null; // No renderizar si no hay mensaje

  // Determinar el estilo basado en si es un mensaje de revelación o de intento fallido
  // Usamos el contenido del mensaje para diferenciar (un poco frágil, pero funciona para este caso)
  const isSuccessMessage = message.includes('¡Correcto!') || message.includes('¡Era') || message.includes('sin intentos');
  const textColor = isSuccessMessage ? 'text-green-600' : 'text-red-600';
  const revealedMessage = message.includes('¡Era') ? `¡Era ${pokemonName}!` : message; // Asegura mostrar el nombre si se agotan intentos


  return (
    <p className={`mt-4 text-xl ${ isRevealed ? (isSuccessMessage ? 'text-green-600' : 'text-gray-700') : textColor } text-center`}>
      {/* Muestra el mensaje formateado si se reveló, o el mensaje normal si no */}
      {isRevealed ? revealedMessage : message}
    </p>
  );
};

export default RespuestaMessage;