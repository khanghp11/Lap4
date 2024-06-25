import React from 'react';
import './App.css';
const Score = ({ score }) => {
  return (
    <div className='score'>
      <h2>Quiz Ended</h2>
      <p>Your score: {score}</p>
    </div>
  );
};

export default Score;
