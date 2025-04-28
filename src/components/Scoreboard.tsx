import React from 'react';

interface ScoreboardProps {
  score: number;
  attempts: number;
  maxAttempts: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, attempts, maxAttempts }) => {
  return (
    <>
      <div className="top-4 left-4 bg-white  text-center p-1 rounded shadow z-10">
        <p className="text-lg font-semibold">Puntos: <span className="text-green-600">{score}</span></p>
      </div>
      <div className="top-4 right-4 bg-white text-center p-1 mt-1 rounded shadow z-10">
        <p className="text-lg font-semibold">Intentos: <span className="text-red-600">{attempts}</span> {maxAttempts > 0 ? `/ ${maxAttempts}` : ''}</p>
      </div>
    </>
  );
};

export default Scoreboard;