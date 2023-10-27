import React from 'react';
import './gamecard.component.css';

function GameCard({ title, imageUrl }) {

  return (
    <div className="game-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default GameCard;
